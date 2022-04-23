const express = require("express")
const router = express.Router()

const { addPayment } = require("../controllers/payments/addPayment")
const {	getPayments} = require("../controllers/payments/getPayments")
const {	updatePayment} = require("../controllers/payments/updatePayment")

router.post("/", addPayment)

router.get("/:id?", getPayments)

router.put("/:id", updatePayment)

module.exports = router
