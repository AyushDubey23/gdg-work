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

    const newData = await request.json();

    const dataToUpdate = Object.fromEntries(
      Object.entries({
        eventName: newData.eventName,
        eventType: newData.eventType,
        description: newData.description,
        eventImage: newData.eventImage,
        location: newData.location,
        date: newData.date,
        time: newData.time,
        capacity: newData.capacity,
        registrationDeadline: newData.registrationDeadline,
        tags: newData.tags,
        eventCategory: newData.eventCategory,
        parentEvent: newData.parentEvent,
      }).filter(
        ([_, value]) => value !== undefined && value !== null && value !== ""
      )
    );

    const editedEvent = await Event.findByIdAndUpdate(eventId, dataToUpdate, {
      new: true,
    });
    if (!editedEvent) {
      return NextResponse.json(
        { success: false, message: "Event not Updated." },
        { status: 500 }
      );
    }

    return NextResponse.json(
      {
        success: true,
        message: "Event Updated Sucessfully",
        editedEvent,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error Occured while editing event: ", error);
    return NextResponse.json(
      {
        success: false,
        message: "Internal Server While Editing Event.",
        error,
      },
      { status: 500 }
    );
  }
}
