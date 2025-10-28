import Event from "@/models/event.model";
import { IEvent } from "@/types/types";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const eventFormData: IEvent = await request.json();
    if (
      Object.values(eventFormData).some((value) => !value?.toString().trim())
    ) {
      return NextResponse.json(
        { success: false, message: "All fields are required" },
        { status: 400 }
      );
    }

    const {
      eventName,
      eventType,
      description,
      eventImage,
      location,
      date,
      time,
      capacity,
      registrationDeadline,
      tags,
      eventCategory,
      parentEvent,
    } = eventFormData;

    const eventAlreadyExists = await Event.findOne({ eventName });
    if (eventAlreadyExists) {
      return NextResponse.json(
        {
          success: false,
          message: "Event Already Exists.",
        },
        { status: 409 }
      );
    }

    const eventDetails = {
      eventName,
      eventType,
      description,
      eventImage,
      location,
      date,
      time,
      capacity,
      registrationDeadline,
      tags,
      eventCategory: eventCategory || null,
      parentEvent: parentEvent || null,
    };
    const createdEvent = await Event.create(eventDetails);

    if (!createdEvent) {
      return NextResponse.json(
        {
          success: false,
          message: "Event Not Created.",
        },
        { status: 404 }
      );
    }

    return NextResponse.json(
      {
        success: true,
        message: "New Event Added Sucessfully",
        createdEvent,
      },
      { status: 201 }
    );
  } catch (error: any) {
    console.error("Error Occured while adding Event: ", error);
    return NextResponse.json(
      {
        success: false,
        message: "Internal Server While Creating Event.",
        error,
      },
      { status: 500 }
    );
  }
}
