import Payment from "../../models/paymentModel"

export async function payPayment(req, res) {
	try {
		const { amount, razorpayPaymentId, razorpayOrderId, razorpaySignature } =
			req.body
		const newOrder = Payment({
			isPaid: true,
			amount: amount,
			razorpay: {
				appointmentId: razorpayOrderId,
				paymentId: razorpayPaymentId,
				signature: razorpaySignature,
			},
		})
		await newOrder.save()
		res.send({
			msg: "Payment was successfull",
		})
	} catch (error) {
		console.log(error)
		res.status(500).send(error)
	}
}
