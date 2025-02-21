

import { connectToDatabase } from "@/lib/mongodb";
import Faq from "@/model/Faq";
import { NextResponse } from "next/server";


// ✅ Handle GET request (Fetch FAQs)
export async function GET() {
  await connectToDatabase();
  try {
    const faqs = await Faq.find({});
    return NextResponse.json(faqs, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Failed to fetch FAQs" }, { status: 500 });
    console.log(error)
  }
}

// ✅ Handle POST request (Add FAQ)
export async function POST(req: Request) {
  await connectToDatabase();
  try {
    const { question, answer } = await req.json();

    if (!question || !answer) {
      return NextResponse.json({ message: "Question and answer are required" }, { status: 400 });
    }

    const newFaq = new Faq({ question, answer });
    await newFaq.save();

    return NextResponse.json({ message: "FAQ added successfully", faq: newFaq }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ message: "Error adding FAQ" }, { status: 500 });
    console.log(error)

  }
}

