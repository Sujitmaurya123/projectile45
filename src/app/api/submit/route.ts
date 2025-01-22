import nodemailer from "nodemailer";
import { NextResponse } from "next/server";
import { FormSubmission } from "@/model/FormSubmission";
import { connectToDatabase } from "@/lib/mogodb";



export async function POST(req: Request) {
  try {
    // Manually parse the request body using req.json() for the Request object
    const { firstName, email, phone, courses, consent } = await req.json();
    console.log("Request Body:", { firstName, email, phone, courses, consent });

    // Validate input
    if (!firstName || !email || !phone || !courses?.length || consent === undefined) {
      return NextResponse.json({ message: "Invalid input. All fields are required." }, { status: 400 });
    }

    // Connect to MongoDB
    await connectToDatabase();

    // Save form submission to MongoDB
    const submission = new FormSubmission({ firstName, email, phone, courses, consent });
    await submission.save();

    // Configure Nodemailer for sending user email using Gmail
    const userTransporter = nodemailer.createTransport({
      service: "gmail", // Gmail service
      auth: {
        user: process.env.GMAIL_USER,  // Your Gmail email
        pass: process.env.GMAIL_PASS,  // Your Gmail App Password
      },
    });

    // Set up the content of the emails
    const userEmailContent = `
Hi ${firstName},

Thank you for your interest in our courses. Our team will contact you shortly.

Best Regards,
Projectile45
    `;

    const adminEmailContent = `
New form submission received:

Name: ${firstName}
Email: ${email}
Phone: ${phone}
Courses: ${courses.join(", ")}
Consent: ${consent ? "Yes" : "No"}
    `;

    // Send the email to the user via Gmail
    await userTransporter.sendMail({
      from: `"Projectile45" <${process.env.GMAIL_USER}>`,  // Your Gmail address
      to: email,  // User's email (from the form data)
      subject: "Thank You for Your Submission",
      text: userEmailContent,  // Email content for user
    });

    // Send the email to the admin using Resend API
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${process.env.RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: process.env.GMAIL_USER,  // Admin email (from Gmail)
        to: process.env.ADMIN_EMAIL,   // Admin's email
        subject: "New Form Submission",
        text: adminEmailContent,  // Email content for admin
      }),
    });

    if (!response.ok) {
      throw new Error("Failed to send admin email via Resend");
    }

    return NextResponse.json({ message: "Form submitted successfully." }, { status: 200 });
  } catch (error) {
    console.error("Error processing the request:", error);
    return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
  }
}
