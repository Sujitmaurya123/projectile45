import { connectToDatabase } from "@/lib/mongodb";
import Faq from "@/model/Faq";
import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

interface RouteContext {
  params: Promise<{ id: string }>; // params is now a Promise
}

// ✅ Handle PUT request (Update an FAQ)
export async function PUT(req: NextRequest, context: RouteContext) {
  await connectToDatabase();

  try {
    // Await params before accessing id
    const { id } = await context.params;

    if (!id) {
      return NextResponse.json({ message: "ID is required" }, { status: 400 });
    }

    const { question, answer } = await req.json();

    if (!question || !answer) {
      return NextResponse.json({ message: "All fields are required" }, { status: 400 });
    }

    const updatedFaq = await Faq.findByIdAndUpdate(id, { question, answer }, { new: true });

    if (!updatedFaq) {
      return NextResponse.json({ message: "FAQ not found" }, { status: 404 });
    }

    return NextResponse.json({ message: "FAQ updated successfully", faq: updatedFaq }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "Error updating FAQ" }, { status: 500 });
  }
}

// ✅ Handle DELETE request (Remove an FAQ)
export async function DELETE(req: NextRequest, context: RouteContext) {
  await connectToDatabase();

  try {
    // Await params before accessing id
    const { id } = await context.params;

    if (!id) {
      return NextResponse.json({ message: "ID is required" }, { status: 400 });
    }

    const deletedFaq = await Faq.findByIdAndDelete(id);

    if (!deletedFaq) {
      return NextResponse.json({ message: "FAQ not found" }, { status: 404 });
    }

    return NextResponse.json({ message: "FAQ deleted successfully" }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "Error deleting FAQ" }, { status: 500 });
  }
}
