import { Router } from "express"
const router = Router()

import { addSchedule } from "../controllers/schedules/addSchedule.js"
import authVerify from "../middlewares/authVerify.js"

router.post("/", authVerify, addSchedule)

export default router
