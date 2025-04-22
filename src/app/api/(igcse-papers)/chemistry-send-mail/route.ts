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
    const { name, email, subjects } = await req.json();

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

    // Subject-based attachments
    const subjectAttachments: Attachment[] = subjects
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
      .filter((attachment: Attachment): attachment is Attachment => attachment !== null);

    // Always include Email_Temp.pdf
    const defaultAttachmentPath = path.join(process.cwd(), 'public', 'files', 'Email_Temp.pdf');
    const defaultAttachment: Attachment | null = fs.existsSync(defaultAttachmentPath)
      ? {
          filename: 'Email_Temp.pdf',
          content: fs.readFileSync(defaultAttachmentPath),
          contentType: 'application/pdf',
        }
      : null;

    const attachments: Attachment[] = defaultAttachment
      ? [...subjectAttachments, defaultAttachment]
      : [...subjectAttachments];

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS,
      },
    });

    const emailBody = `
Hi ${name},

Thank you for your interest in IGCSE Chemistry revision materials.

Attached you'll find the papers and markschemes you selected.

We've also included a quick summary document (Email_Temp.pdf) with helpful notes.

If you need resources for other subjects or sessions, feel free to reach out!

Best regards,  
Chemistry Papers Team
`.trim();

    const mailOptions = {
      from: `"Chemistry Papers" <${process.env.GMAIL_USER}>`,
      to: email,
      subject: 'Your Requested Chemistry Papers 📄',
      text: emailBody,
      attachments,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json({ success: false, error: 'Failed to send email' }, { status: 500 });
  }
}
