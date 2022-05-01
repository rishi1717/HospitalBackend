import { Router } from "express"
const router = Router()

import { addSchedule } from "../controllers/schedules/addSchedule.js"
import { getSchedule } from "../controllers/schedules/getSchedule.js"
import authVerify from "../middlewares/authVerify.js"

router.post("/", authVerify, addSchedule)
router.get("/", authVerify, getSchedule)

export default router
