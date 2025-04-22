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

    // Mapping subjects to filenames (You can extend this)
    const subjectToFileMap: Record<string, string> = {
      "Mathematics: analysis and approaches higher level paper 1 specimen paper": "HL_Paper1_Specimen.pdf",
      "Mathematics: analysis and approaches higher level paper 1 markscheme": "HL_Paper1_Specimen.pdf",
      "Mathematics: analysis and approaches higher level paper 2 specimen paper": "HL_Paper1_Specimen.pdf",
      "Mathematics: analysis and approaches higher level paper 2 markscheme": "HL_Paper1_Specimen.pdf",
      "Mathematics: analysis and approaches higher level paper 3 specimen paper": "HL_Paper1_Specimen.pdf",
      "Mathematics: analysis and approaches higher level paper 3 markscheme": "HL_Paper1_Specimen.pdf",
      "Mathematics: analysis and approaches standard level paper 1 specimen paper": "HL_Paper1_Specimen.pdf",
      "Mathematics: analysis and approaches standard level paper 1 markscheme": "HL_Paper1_Specimen.pdf",
      "Mathematics: analysis and approaches standard level paper 2 specimen paper": "HL_Paper1_Specimen.pdf",
      "Mathematics: analysis and approaches standard level paper 2 markscheme": "HL_Paper1_Specimen.pdf",
    };

    // Files that are always included
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
      from: `"Practice Papers" <${process.env.GMAIL_USER}>`,
      to: email,
      subject: 'Your Requested Math Specimen Papers 📄',
      text: `Hi ${name},\n\nThank you for your interest.\n\nWe've attached the papers you selected.\n\nRegards,\nTeam`,
      attachments,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Email send failed:', error);
    return NextResponse.json({ success: false, error: 'Failed to send email' }, { status: 500 });
  }
}
