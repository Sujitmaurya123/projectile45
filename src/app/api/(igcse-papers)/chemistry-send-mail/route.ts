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
      'Chemistry: IGCSE Chemistry june-2023-mark-scheme-paper-11': 'Chemistry_Paper11_Markscheme.pdf',
      'Chemistry: IGCSE Chemistry june-2023 markscheme paper-21': 'Chemistry_Paper21_Markscheme.pdf',
      'Chemistry: IGCSE Chemistry june-2023 markscheme paper-31': 'Chemistry_Paper31_Markscheme.pdf',
      'Chemistry: IGCSE Chemistry june-2023 markscheme paper-41': 'Chemistry_Paper41_Markscheme.pdf',
      'Chemistry: IGCSE Chemistry june-2023 markscheme paper-51': 'Chemistry_Paper51_Markscheme.pdf',
      'Chemistry: IGCSE Chemistry june-2023 markscheme paper-61': 'Chemistry_Paper61_Markscheme.pdf',
      'Chemistry: IGCSE Chemistry 2023-specimen-paper-1-mark-scheme': 'Chemistry_SpecimenPaper1_Markscheme.pdf',
      'Chemistry: IGCSE Chemistry 2023-specimen-paper-2-mark-scheme': 'Chemistry_SpecimenPaper2_Markscheme.pdf',
      'Chemistry: IGCSE Chemistry 2023-specimen-paper-3-mark-scheme': 'Chemistry_SpecimenPaper3_Markscheme.pdf',
      'Chemistry: IGCSE Chemistry 2023-specimen-paper-4-mark-scheme': 'Chemistry_SpecimenPaper4_Markscheme.pdf',
      'Chemistry: IGCSE Chemistry 2023-specimen-paper-5-mark-scheme': 'Chemistry_SpecimenPaper5_Markscheme.pdf',
      'Chemistry: IGCSE Chemistry 2023-specimen-paper-6-mark-scheme': 'Chemistry_SpecimenPaper6_Markscheme.pdf',
    };

    // Create an array of attachments based on the selected subjects
    const attachments: Attachment[] = subjects
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
      .filter((attachment:Attachment): attachment is Attachment => attachment !== null);

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
      from: `"Chemistry Papers" <${process.env.GMAIL_USER}>`, // Sender's email
      to: email, // Recipient's email
      subject: 'Your Requested Chemistry Papers 📄', // Email subject
      text: `Hi ${name},\n\nThank you for your interest. Please find attached the Chemistry papers you requested.\n\nBest regards,\nChemistry Papers Team`, // Email body
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
