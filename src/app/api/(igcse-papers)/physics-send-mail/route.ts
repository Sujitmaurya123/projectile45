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

Thank you for requesting IGCSE Physics materials.

Please find attached the markschemes and question papers you selected. We've also included a helpful summary document (Email_Temp.pdf) to assist with your revision.

Need more resources or help? Let us know anytime.

Best regards,  
P45 Team
`.trim();

    const mailOptions = {
      from: `"Physics Papers" <${process.env.GMAIL_USER}>`,
      to: email,
      subject: 'Your Requested Physics Papers 📄',
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
