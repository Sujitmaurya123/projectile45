
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

    

    return NextResponse.json({ message: "Form submitted successfully." }, { status: 200 });
  } catch (error) {
    console.error("Error processing the request:", error);
    return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
  }
}
