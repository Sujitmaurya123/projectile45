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
    const { name, email,  subjects } = await req.json();

    const subjectToFileMap: Record<string, string> = {
      "Mathematics: applications and interpretation higher level paper 1 specimen paper": "AI_HL_Paper1_Specimen.pdf",
      "Mathematics: applications and interpretation higher level paper 1 markscheme": "AI_HL_Paper1_Specimen.pdf",
      "Mathematics: applications and interpretation higher level paper 2 specimen paper": "AI_HL_Paper1_Specimen.pdf",
      "Mathematics: applications and interpretation higher level paper 2 markscheme": "AI_HL_Paper1_Specimen.pdf",
      "Mathematics: applications and interpretation higher level paper 3 specimen paper": "AI_HL_Paper1_Specimen.pdf",
      "Mathematics: applications and interpretation higher level paper 3 markscheme": "AI_HL_Paper1_Specimen.pdf",
      "Mathematics: applications and interpretation standard level paper 1 specimen paper": "AI_HL_Paper1_Specimen.pdf",
      "Mathematics: applications and interpretation standard level paper 1 markscheme": "AI_HL_Paper1_Specimen.pdf",
      "Mathematics: applications and interpretation standard level paper 2 specimen paper": "AI_HL_Paper1_Specimen.pdf",
      "Mathematics: applications and interpretation standard level paper 2 markscheme": "AI_HL_Paper1_Specimen.pdf",
    };

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
      .filter((attachment: CustomAttachment): attachment is { filename: string; content: Buffer; contentType: string } => attachment !== null);

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS,
      },
    });

    const mailOptions = {
      from: `"Specimen Papers" <${process.env.GMAIL_USER}>`,
      to: email,
      subject: 'Your Requested Math AI Specimen Papers 🧮',
      text: `Hi ${name},\n\nThank you for your request!\n\nThe selected Mathematics: Applications and Interpretation specimen papers are attached.\n\nBest regards,\nTeam`,
      attachments,
    };

    await transporter.sendMail(mailOptions);
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error sending mail:', error);
    return NextResponse.json({ success: false, error: 'Failed to send email' }, { status: 500 });
  }
}
