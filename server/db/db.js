import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config(); // Load environment variables from .env file

const dbUrl = process.env.MONGODB_URL;

mongoose.connection.on('connected', () => {
    console.log('Mongoose connected to the database');
});

mongoose.connection.on('error', (err) => {
    console.error('Mongoose connection error:', err);
});

mongoose.connection.on('disconnected', () => {
    console.log('Mongoose disconnected');
});

// Function to connect to the database
const connectToDatabase = async () => {
    try {
        await mongoose.connect(dbUrl);
        console.log("Database connected successfully");
    } catch (error) {
        console.log("Database connection error:", error);
    }
};

export default connectToDatabase;
