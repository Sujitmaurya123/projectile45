import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI as string;

if (!MONGODB_URI) {
  throw new Error("Please define the MONGODB_URI environment variable.");
}

// Cached connection
let cachedConnection: mongoose.Connection | null = null;
let cachedPromise: Promise<mongoose.Connection> | null = null;

export async function connectToDatabase(): Promise<mongoose.Connection> {
  if (cachedConnection) {
    return cachedConnection;
  }

  if (!cachedPromise) {
    const options: mongoose.ConnectOptions = {
      bufferCommands: false,
      
    };

    cachedPromise = mongoose.connect(MONGODB_URI, options).then(() => {
      cachedConnection = mongoose.connection;
      return cachedConnection;
    });
  }

  return cachedPromise;
}
