import mongoose from "mongoose";

const connection = {};

export const connectToDb = async () => {
  try {
    if (connection.isConnected) {
      console.log("Using existing connection");
      return;
    }

    const db = await mongoose.connect(process.env.MONGO, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    connection.isConnected = db.connection.readyState;

    console.log("New connection established");
  } catch (error) {
    console.error("Failed to connect to database", error);
    throw new Error("Failed to connect to database");
  }
};
