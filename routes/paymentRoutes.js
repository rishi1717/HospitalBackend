import { Router } from "express"
const router = Router()

import { addPayment } from "../controllers/payments/addPayment.js"
import { getPayments } from "../controllers/payments/getPayments.js"
import { updatePayment } from "../controllers/payments/updatePayment.js"
import authVerify from '../middlewares/authVerify.js'

router.post("/",authVerify, addPayment)

router.get("/:id?", getPayments)

router.put("/:id", updatePayment)

export default router
