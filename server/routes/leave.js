import express from "express";
import authMiddleware from '../middleware/authMiddleware.js'
import { addLeave } from "../controllers/LeaveController.js";


const router = express.Router()

router.post('/add',authMiddleware, addLeave)






export default router