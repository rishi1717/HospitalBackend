import { Router } from "express"
const router = Router()

import { addSchedule } from "../controllers/schedules/addSchedule.js"
import { deleteSchedule } from "../controllers/schedules/deleteSchedule.js"
import { getSchedule } from "../controllers/schedules/getSchedule.js"
import { updateSchedule } from "../controllers/schedules/updateSchedule.js"
import authVerify from "../middlewares/authVerify.js"

router.post("/", authVerify, addSchedule)
router.get("/", authVerify, getSchedule)
router.put("/:id", authVerify, updateSchedule)
router.delete("/:id", authVerify, deleteSchedule)

export default router
