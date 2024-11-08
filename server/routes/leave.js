import express from "express";
import authMiddleware from '../middleware/authMiddleware.js'
import { addLeave , getLeave , getLeaves } from "../controllers/LeaveController.js";


const router = express.Router()

router.post('/add',authMiddleware, addLeave)
router.get('/:id',authMiddleware, getLeave)
router.get('/',authMiddleware, getLeaves)






export default router