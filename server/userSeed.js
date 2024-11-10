// userRegister.js
import User from "./models/User.js";
import bcrypt from "bcryptjs";
import connectToDatatbase from "./db/db.js";

const userRegister = async () => {
    try {
        // Ensure the database connection is established
        await connectToDatatbase();

        // Check if the admin user already exists
        const existingUser = await User.findOne({ email: "admin@gmail.com" });
        if (existingUser) {
            console.log("Admin user already exists.");
            return;  // Skip creating a new admin if it already exists
        }

        // If the admin does not exist, create the admin user
        const hashPassword = await bcrypt.hash("admin", 10);
        const newUser = new User({
            name: "Admin",
            email: "admin@gmail.com",
            password: hashPassword,
            role: "admin"
        });

        await newUser.save();
        console.log("Admin user created successfully.");
    } catch (error) {
        console.log("Error creating admin user:", error);
    }
};

export default userRegister;
