import { connectToDatabase } from "@/lib/connectToDatabase";
import Event from "@/models/event.model";
import { NextRequest, NextResponse } from "next/server";

// Edit Event
// TODO: Provide access of this route to admin or super_admin only.
export async function PUT(
  request: NextRequest,
  props: { params: Promise<{ eventId: string }> }
) {
  try {
    const { eventId } = await props.params;
    if (!eventId) {
      return NextResponse.json(
        { success: false, message: "Event Id Not Found." },
        { status: 404 }
      );
    }

    await connectToDatabase();

    const deletedEvent = await Event.findByIdAndDelete(eventId);
    if (!deletedEvent) {
      return NextResponse.json(
        { success: false, message: "Event Not Deleted." },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { success: true, message: "Event Deleted." },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error Occured while deleting event: ", error);
    return NextResponse.json(
      {
        success: false,
        message: "Internal Server While Deleting Event.",
        error,
      },
      { status: 500 }
    );
  }
}
