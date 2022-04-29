import { Router } from "express"
const router = Router()

import { addPrescription } from "../controllers/prescriptions/addPrescription.js"
import { getPrescriptions } from "../controllers/prescriptions/getPrescriptions.js"
import authVerify from "../middlewares/authVerify.js"

router.get("/:id?",authVerify, getPrescriptions)

router.post("/", addPrescription)

export default router
