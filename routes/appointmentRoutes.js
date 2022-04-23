import { Router } from "express"
const router = Router()

import { addAppointment } from "../controllers/appointments/addAppointment.js"
import { getAppointments } from "../controllers/appointments/getAppointments.js"
import { updateAppointment } from "../controllers/appointments/updateAppointment.js"
import { deleteAppointment } from "../controllers/appointments/deleteAppointment.js"

router.post("/", addAppointment)

router.get("/:id?", getAppointments)

router.put("/:id", updateAppointment)

router.delete("/:id", deleteAppointment)

export default router