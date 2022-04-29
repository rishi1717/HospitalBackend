import { Router } from "express"
const router = Router()

import { addAppointment } from "../controllers/appointments/addAppointment.js"
import { getAppointments } from "../controllers/appointments/getAppointments.js"
import { updateAppointment } from "../controllers/appointments/updateAppointment.js"
import { deleteAppointment } from "../controllers/appointments/deleteAppointment.js"
import authVerify from "../middlewares/authVerify.js"

router.post("/", authVerify, addAppointment)

router.get("/:id?",authVerify, getAppointments)

router.put("/:id", authVerify, updateAppointment)

router.delete("/:id", authVerify, deleteAppointment)

export default router