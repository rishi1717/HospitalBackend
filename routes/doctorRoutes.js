import { Router } from "express"
const router = Router()
import { doctorRegister } from "../controllers/doctors/doctorRegister.js"
import { doctorLogin } from "../controllers/doctors/doctorLogin.js"
import { getDoctors } from "../controllers/doctors/getDoctors.js"
import { updateDoctor } from "../controllers/doctors/updateDoctor.js"
import { deleteDoctor } from "../controllers/doctors/deleteDoctor.js"
import authVerify from "../middlewares/authVerify.js"


router.post("/login", doctorLogin)

router.post("/", doctorRegister)

router.get("/:id?",authVerify, getDoctors)

router.put("/:id", authVerify, updateDoctor)

router.delete("/:id", authVerify, deleteDoctor)

export default router
