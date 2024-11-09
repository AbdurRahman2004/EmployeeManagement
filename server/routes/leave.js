import express from "express";
import authMiddleware from '../middleware/authMiddleware.js'
import { addLeave , getLeave , getLeaves,updateLeave, getLeaveDetail } from "../controllers/LeaveController.js";


const router = express.Router()

router.post('/add',authMiddleware, addLeave)
router.get('/:id',authMiddleware, getLeave)
router.put('/:id',authMiddleware, updateLeave)
router.get('/detail/:id',authMiddleware, getLeaveDetail)
router.get('/',authMiddleware, getLeaves)






export default router