import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import fs from 'fs';
import path from 'path';

type CustomAttachment = {
  filename: string;
  content: Buffer;
  contentType: string;
};

export async function POST(req: Request) {
  try {
    const { name, email, subjects } = await req.json();

    // 🧪 Physics paper mapping
    const subjectToFileMap: Record<string, string> = {
      'Physics higher level paper 1A specimen question paper': 'hl-paper-1A.pdf',
      'Physics higher level paper 1A specimen markscheme': 'hl-paper-1A.pdf',
      'Physics higher level paper 1B specimen question paper': 'hl-paper-1A.pdf',
      'Physics higher level paper 1B specimen markscheme': 'hl-paper-1A.pdf',
      'Physics higher level paper 2 specimen question paper': 'hl-paper-1A.pdf',
      'Physics higher level paper 2 specimen markscheme': 'hl-paper-1A.pdf',
      'Physics standard level paper 1A specimen question paper': 'hl-paper-1A.pdf',
      'Physics standard level paper 1A specimen markscheme': 'hl-paper-1A.pdf',
      'Physics standard level paper 1B specimen question paper': 'hl-paper-1A.pdf',
      'Physics standard level paper 1B specimen markscheme': 'hl-paper-1A.pdf',
      'Physics standard level paper 2 specimen question paper': 'hl-paper-1A.pdf',
      'Physics standard level paper 2 specimen markscheme': 'hl-paper-1A.pdf',
    };

    // Default attachment (like a cover page or summary)
    const alwaysIncludeFiles: string[] = ['Email_temp.pdf'];

    const subjectAttachments: CustomAttachment[] = subjects
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
      .filter((attachment:CustomAttachment): attachment is CustomAttachment => attachment !== null);

    const alwaysAttachments: CustomAttachment[] = alwaysIncludeFiles
      .map((fileName) => {
        const filePath = path.join(process.cwd(), 'public', 'files', fileName);
        if (!fs.existsSync(filePath)) return null;

        return {
          filename: fileName,
          content: fs.readFileSync(filePath),
          contentType: 'application/pdf',
        };
      })
      .filter((attachment): attachment is CustomAttachment => attachment !== null);

    const attachments = [...subjectAttachments, ...alwaysAttachments];

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS,
      },
    });

    const mailOptions = {
      from: `"Physics Specimen Papers" <${process.env.GMAIL_USER}>`,
      to: email,
      subject: 'Requested Physics HL/SL Specimen Papers 📡',
      text: `Hi ${name},\n\nThank you for your request!\n\nThe selected Physics Higher and Standard Level specimen papers are attached.\n\nBest regards,\nP45 Team`,
      attachments,
    };

    await transporter.sendMail(mailOptions);
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error sending mail:', error);
    return NextResponse.json({ success: false, error: 'Failed to send email' }, { status: 500 });
  }
}
