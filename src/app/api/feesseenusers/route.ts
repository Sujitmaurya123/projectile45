import { NextResponse } from "next/server";

import { connectToDatabase } from "@/lib/mongodb";
import mongoose from "mongoose";
import { submissionSchema } from "@/lib/schema";

// Define the schema for Mongo
const SubmissionSchema = new mongoose.Schema(
  {
    name: String,
    email: String,
    whatsapp: String,
    country: String,
    createdAt: { type: Date, default: Date.now },
  },
  { collection: "feeseenusers" }
);

const Submission = mongoose.models.Submission || mongoose.model("Feeseenusers", SubmissionSchema);

// POST handler
export async function POST(req: Request) {
  try {
    const body = await req.json();

    // Validate incoming data
    
    const parsed = submissionSchema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json({ message: "Validation failed", errors: parsed.error.errors }, { status: 400 });
    }

    await connectToDatabase();
    const submission = await Submission.create(parsed.data);

    return NextResponse.json({ message: "Success", submissionId: submission._id });
  } catch (error) {
    console.error("API error:", error);
    return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
  }
}
