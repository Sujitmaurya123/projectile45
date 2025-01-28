import { NextResponse } from "next/server";
import  {prisma}  from "@/lib/prisma";

export const dynamic = "force-dynamic";

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
    const body = await req.json();
    console.log("Parsed Request Body:", body);

    const { firstName, email, phone, courses, consent } = body;

    // Validate input
    if (!firstName || !email || !phone || !Array.isArray(courses) || consent === undefined) {
      return NextResponse.json(
        { message: "Invalid input. All fields are required." },
        { status: 400, headers: CORS_HEADERS }
      );
    }

    // Save to the database
    const submission = await prisma.formsubmission.create({
      data: {
        firstName,
        email,
        phone,
        courses, // Store array directly (no need for JSON.stringify)
        consent,
      },
    });

    console.log("Database Response:", submission);

    return NextResponse.json(
      { message: "Form submitted successfully.", submission },
      { status: 200, headers: CORS_HEADERS }
    );
  } catch (error: unknown) {
    // Assert the error type to 'Error'
    if (error instanceof Error) {
      // Log the stack trace to avoid Next.js pretty-printing issue
      console.error("Error processing the request:", error.stack || error);

      const errorMessage = error.message || "Unknown error occurred";

      return new Response(
        JSON.stringify({ message: errorMessage }),
        { status: 500, headers: { "Content-Type": "application/json", ...CORS_HEADERS } }
      );
    } else {
      // Handle the case where the error is not an instance of Error
      console.error("An unknown error occurred:", error);
      return new Response(
        JSON.stringify({ message: "Unknown error occurred" }),
        { status: 500, headers: { "Content-Type": "application/json", ...CORS_HEADERS } }
      );
    }
  }
}

export async function GET() {
  try {
    // Fetch all form submissions from MySQL using Prisma
    const submissions = await prisma.formsubmission.findMany();

    return NextResponse.json(
      { submissions },
      { status: 200, headers: CORS_HEADERS }
    );
  } catch (error: unknown) {
    // Assert the error type to 'Error'
    if (error instanceof Error) {
      console.error("Error fetching data:", error.stack || error);
    } else {
      console.error("An unknown error occurred:", error);
    }

    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500, headers: CORS_HEADERS }
    );
  }
}
