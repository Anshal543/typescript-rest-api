import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(`${process.env.MONGO_URI as string}/TSEXPRESS`);
    console.log(`mongoDB connected: ${connectionInstance.connection.host}`);
  } catch (error) {
    console.log("mongoDB connection failed", error);
    process.exit(1);
  }
};

export default connectDB;