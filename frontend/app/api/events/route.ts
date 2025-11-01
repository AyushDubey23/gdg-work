import Event from "@/models/event.model";
import { NextRequest, NextResponse } from "next/server";

// Getting all Events Data
export async function GET(request: NextRequest) {
  try {
    const allEvents = await Event.aggregate([
      {
        $match: {
          draft: false,
        },
      },
    ]);
    if (allEvents) {
      return NextResponse.json(
        {
          success: false,
          message: "No Events Found.",
        },
        { status: 404 }
      );
    }

    return NextResponse.json(
      {
        success: true,
        message: "All Events Fetched.",
        allEvents,
      },
      { status: 200 }
    );
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
