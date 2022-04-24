import { Router } from "express"
const router = Router()

import { addPrescription } from "../controllers/prescriptions/addPrescription.js"
import { getPrescriptions } from "../controllers/prescriptions/getPrescriptions.js"

router.get("/:id?", getPrescriptions)

router.post("/", addPrescription)

export default router
