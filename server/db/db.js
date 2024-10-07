import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config(); // Load environment variables from .env file

const dbUrl = process.env.MONGODB_URL;

const connectToDatabase = async () => {
    try {
        await mongoose.connect(dbUrl); // Add options for compatibility
        console.log("Database connected successfully");
    } catch (error) {
        console.log("Database connection error:", error);
    }
};

export default connectToDatabase;
