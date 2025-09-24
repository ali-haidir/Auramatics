import { NextRequest, NextResponse } from "next/server";
import {
  sendContactFormEmail,
  validateContactForm,
  type ContactFormData,
} from "@/app/services/emailService";

// Configure for static export compatibility
export const dynamic = "force-dynamic";
export const revalidate = 0;

export async function POST(request: NextRequest) {
  try {
    // Parse the request body
    const formData: ContactFormData = await request.json();

    // Validate the form data
    if (!validateContactForm(formData)) {
      return NextResponse.json(
        {
          success: false,
          message: "Please fill in all required fields correctly.",
        },
        { status: 400 }
      );
    }

    // Send the email
    const result = await sendContactFormEmail(formData);

    if (result.success) {
      return NextResponse.json(result, { status: 200 });
    } else {
      return NextResponse.json(result, { status: 500 });
    }
  } catch (error) {
    console.error("❌ API Error:", error);
    return NextResponse.json(
      {
        success: false,
        message: "Internal server error. Please try again later.",
      },
      { status: 500 }
    );
  }
}

// Handle other HTTP methods
export async function GET() {
  return NextResponse.json(
    { message: "This endpoint only accepts POST requests" },
    { status: 405 }
  );
}
