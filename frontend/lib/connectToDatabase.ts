import mongoose from "mongoose";

type connectionObject = {
  isConnected?: number;
};

const connection: connectionObject = {};

export async function connectToDatabase(): Promise<void> {
  if (connection.isConnected) {
    console.log("🟢Already connected to database");
    return;
  }

  try {
    const database = await mongoose.connect(process.env.MONGODB_URL || "");
    connection.isConnected = database.connections[0].readyState;
    console.log("✅Database connected sucessfully");
  } catch (e) {
    console.error("❌Error connecting to Database: ", e);
    process.exit(1);
  }
}
