import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config(); // Load environment variables from .env file

const dbUrl = process.env.MONGODB_URL;

// Function to connect to the database
const connectToDatabase = async () => {
    try {
        await mongoose.connect(dbUrl, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            connectTimeoutMS: 30000,  // 30 seconds
            serverSelectionTimeoutMS: 30000,  // 30 seconds
        });
        console.log("Database connected successfully");
    } catch (error) {
        console.log("Database connection error:", error);
    }
};

export default connectToDatabase;
