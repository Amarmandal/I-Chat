import mongoose from "mongoose";

export const connectDB = async () => {
  let uri: string | undefined;

  if (!process.env.DATABASE) {
    return;
  }

  uri = process.env.DATABASE;

  try {
    await mongoose.connect(uri);
    console.log("DATABASE CONNECTED SUCCESSFULLY");
  } catch (e) {
    console.log(e);
    process.exit(1);
  }
};
