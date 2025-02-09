import User from "../models/User.js";
import bcrypt from "bcryptjs";

const changePassword = async (req, res) => {
    try {
        const { userId, oldPassword, newPassword } = req.body;

        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ success: false, error: "User not found" });
        }

        // Compare oldPassword with the hashed password in the database
        const isMatch = await bcrypt.compare(oldPassword, user.password);

        if (!isMatch) {
            return res.status(400).json({ success: false, error: "Incorrect old password" });
        }

        // Hash the new password and update it
        const hashPassword = await bcrypt.hash(newPassword, 10);
        await User.findByIdAndUpdate(userId, { password: hashPassword });

        return res.status(200).json({ success: true });
    } catch (error) {
        console.error("Error in changePassword function:", error);
        return res.status(500).json({ success: false, error: "Server error while changing password" });
    }
};

export default changePassword;
