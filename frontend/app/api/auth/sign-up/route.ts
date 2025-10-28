import { connectToDatabase } from "@/lib/connectToDatabase";
import User from "@/models/user.model";
import { IUser } from "@/types/types";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const formData = await request.json();
    // Check if any value is missing, null, or an empty string
    if (Object.values(formData).some((value) => !value?.toString().trim())) {
      return NextResponse.json(
        { message: "All fields are required" },
        { status: 400 }
      );
    }

    const {
      fullName,
      email,
      password,
      profilePhoto,
      phoneNumber,
      college,
      year,
      branch,
    }: IUser = formData;

    await connectToDatabase();

    const userAlreadyExists = await User.findOne({
      fullName,
      email,
      phoneNumber,
    });

    if (userAlreadyExists) {
      return NextResponse.json(
        {
          success: false,
          message: "User Already Exists. Try another Credential",
        },
        { status: 409 }
      );
    }
  } catch (error) {
    console.log("Failed to register user: ", error);
    return NextResponse.json(
      {
        success: false,
        message: "Failed to register user due to an internal server error.",
      },
      { status: 500 }
    );
  }
}
