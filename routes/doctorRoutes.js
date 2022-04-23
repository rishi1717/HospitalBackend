const express = require("express")
const router = express.Router()
const { doctorRegister } = require("../controllers/doctors/doctorRegister")
const { doctorLogin } = require("../controllers/doctors/doctorLogin")
const { getDoctors } = require("../controllers/doctors/getDoctors")
const { updateDoctor } = require("../controllers/doctors/updateDoctor")
const { deleteDoctor } = require("../controllers/doctors/deleteDoctor")

router.post("/login", doctorLogin)

router.post("/", doctorRegister)

router.get("/:id?", getDoctors)

router.put("/:id", updateDoctor)

router.delete("/:id", deleteDoctor)

module.exports = router
