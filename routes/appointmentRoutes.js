const express = require("express")
const router = express.Router()

const { addAppointment } = require("../controllers/appointments/addAppointment")
const { getAppointments } = require("../controllers/appointments/getAppointments")
const { updateAppointment } = require("../controllers/appointments/updateAppointment")
const { deleteAppointment } = require("../controllers/appointments/deleteAppointment")

router.post("/", addAppointment)

router.get("/:id?", getAppointments)

router.put("/:id", updateAppointment)

router.delete("/:id", deleteAppointment)

module.exports = router