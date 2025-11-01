import { NextRequest, NextResponse } from "next/server";

// Get User Data
// TODO
export async function GET(
  request: NextRequest,
  props: { params: Promise<{ userId: string }> }
) {
  try {
  } catch (error) {
    console.error("Error Occured while getting events: ", error);
    return NextResponse.json(
      {
        success: false,
        message: "Internal Server While Getting Events.",
        error,
      },
      { status: 500 }
    );
  }
}
