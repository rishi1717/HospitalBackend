import { Router } from "express"
const router = Router()

import { addPayment } from "../controllers/payments/addPayment.js"
import { getPayments } from "../controllers/payments/getPayments.js"
import { updatePayment } from "../controllers/payments/updatePayment.js"

router.post("/", addPayment)

router.get("/:id?", getPayments)

router.put("/:id", updatePayment)

export default router
