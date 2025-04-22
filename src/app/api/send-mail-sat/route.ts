import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import fs from 'fs';
import path from 'path';

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { name, email, subjects } = body;

  if (!email || !Array.isArray(subjects) || subjects.length === 0) {
    return NextResponse.json({ message: 'Invalid request' }, { status: 400 });
  }

  const subjectToFile: Record<string, string> = {
    math: 'SAT_Maths_P45.pptx',
    // Add more if needed
  };

  // Always include this file
  const alwaysIncludeFiles: string[] = ['Email_temp.pdf'];

  const attachments = [
    // User-selected subjects
    ...subjects.map((subject: string) => {
      const fileName = subjectToFile[subject];
      if (!fileName) return null;

      const filePath = path.join(process.cwd(), 'public', 'files', fileName);
      if (!fs.existsSync(filePath)) return null;

      return {
        filename: fileName,
        content: fs.readFileSync(filePath),
        contentType: 'application/vnd.openxmlformats-officedocument.presentationml.presentation',
      };
    }),

    // Always-included files (like Email_temp.pdf)
    ...alwaysIncludeFiles.map((fileName) => {
      const filePath = path.join(process.cwd(), 'public', 'files', fileName);
      if (!fs.existsSync(filePath)) return null;

      return {
        filename: fileName,
        content: fs.readFileSync(filePath),
        contentType: 'application/pdf',
      };
    }),
  ].filter((attachment): attachment is { filename: string; content: Buffer; contentType: string } => attachment !== null);

  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: process.env.GMAIL_USER,
      to: email,
      subject: 'Your Free SAT Practice Material',
      text: `Hi ${name},\n\nPlease find your requested SAT files attached.\n\nBest regards,\nP45 Team`,
      attachments,
    });

    return NextResponse.json({ message: 'Email sent successfully!' }, { status: 200 });
  } catch (error) {
    console.error('Email sending error:', error);
    return NextResponse.json({ message: 'Failed to send email' }, { status: 500 });
  }
}
