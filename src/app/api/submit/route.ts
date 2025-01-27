import { NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mogodb";
import { FormSubmission } from "@/model/FormSubmission";

const CORS_HEADERS = {
  "Access-Control-Allow-Origin": "*", // Allow all origins (use specific domain in production)
  "Access-Control-Allow-Methods": "GET, POST, OPTIONS", // Allowed HTTP methods
  "Access-Control-Allow-Headers": "Content-Type", // Allowed headers
};

export async function OPTIONS() {
  // Handle preflight requests
  return new Response(null, {
    status: 204, // No Content
    headers: CORS_HEADERS,
  });
}

export async function POST(req: Request) {
  try {
    // Add CORS headers
    const corsHeaders = {
      ...CORS_HEADERS,
    };

    // Parse JSON body
    const { firstName, email, phone, courses, consent } = await req.json();
    console.log("Request Body:", { firstName, email, phone, courses, consent });

    // Validate input
    if (!firstName || !email || !phone || !courses?.length || consent === undefined) {
      return NextResponse.json(
        { message: "Invalid input. All fields are required." },
        { status: 400, headers: corsHeaders }
      );
    }

    // Connect to MongoDB
    await connectToDatabase();

    // Save form submission to MongoDB
    const submission = new FormSubmission({ firstName, email, phone, courses, consent });
    await submission.save();

    return NextResponse.json(
      { message: "Form submitted successfully." },
      { status: 200, headers: CORS_HEADERS }
    );
  } catch (error) {
    console.error("Error processing the request:", error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500, headers: CORS_HEADERS }
    );
  }
}

export async function GET() {
    return new Response("This is the GET endpoint for /api/submit.", {
        status: 200,
        headers: CORS_HEADERS,
    });
}