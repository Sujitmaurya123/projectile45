// app/api/send-mail/route.ts

import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import fs from 'fs';
import path from 'path';


interface Attachment {
  filename: string;
  content: Buffer;
  contentType: string;
}
export async function POST(req: Request) {
  try {
    // Parsing the incoming JSON payload from the frontend
    const { name, email, subjects } = await req.json();

    // Mapping subjects to corresponding filenames
    const subjectToFileMap: Record<string, string> = {
      'Physics: IGCSE Physics june-2023 markscheme paper-11': 'Physics_Paper11_Markscheme.pdf',
      'Physics: IGCSE Physics june-2023 markscheme paper-21': 'Physics_Paper21_Markscheme.pdf',
      'Physics: IGCSE Physics june-2023 markscheme paper-31': 'Physics_Paper31_Markscheme.pdf',
      'Physics: IGCSE Physics june-2023 markscheme paper-41': 'Physics_Paper41_Markscheme.pdf',
      'Physics: IGCSE Physics june-2023 markscheme paper-51': 'Physics_Paper51_Markscheme.pdf',
      'Physics: IGCSE Physics june-2023 markscheme paper-61': 'Physics_Paper61_Markscheme.pdf',
      'Physics: IGCSE Physics june-2023 specimen question paper-1': 'Physics_Paper11_specimen_Question.pdf',
      'Physics: IGCSE Physics june-2023 specimen question paper-2': 'Physics_Paper21_specimen_Question.pdf',
      'Physics: IGCSE Physics june-2023 specimen question paper-3': 'Physics_Paper31_specimen_Question.pdf',
      'Physics: IGCSE Physics june-2023 specimen question paper-4': 'Physics_Paper41_specimen_Question.pdf',
      'Physics: IGCSE Physics june-2023 specimen question paper-5': 'Physics_Paper51_specimen_Question.pdf',
      'Physics: IGCSE Physics june-2023 specimen question paper-6': 'Physics_Paper61_specimen_Question.pdf',
    };

    // Create an array of attachments based on the selected subjects
    const attachments = subjects
      .map((subject: string) => {
        const fileName = subjectToFileMap[subject];
        if (!fileName) return null;

        const filePath = path.join(process.cwd(), 'public', 'files', fileName);
        if (!fs.existsSync(filePath)) return null;

        return {
          filename: fileName,
          content: fs.readFileSync(filePath),
          contentType: 'application/pdf',
        };
      })
      .filter((attachment:Attachment): attachment is { filename: string; content: Buffer; contentType: string } => attachment !== null);

    // Configure the Nodemailer transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS,
      },
    });

    // Setup the email content
    const mailOptions = {
      from: `"Physics Papers" <${process.env.GMAIL_USER}>`, // Sender's email
      to: email, // Recipient's email
      subject: 'Your Requested Physics Papers 📄', // Email subject
      text: `Hi ${name},\n\nThank you for your interest. Please find attached the Physics papers you requested.\n\nBest regards,\nPhysics Papers Team`, // Email body
      attachments, // Attach the PDFs based on selected subjects
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    // Return a success response
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error sending email:', error);

    // Return an error response in case of failure
    return NextResponse.json({ success: false, error: 'Failed to send email' }, { status: 500 });
  }
}
