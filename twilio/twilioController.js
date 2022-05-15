import { sendSms } from "./twilio.js"

export const getTwilioOTP = (req, res) => {
	try {
		const { name, phone } = req.body
        const otp = Math.floor(100000 + Math.random() * 900000)
        console.log(otp)
		const message = `Hi ${name}, your OTP is ${otp}`
		sendSms(phone, message)
		res.status(200).json({
			message: "OTP sent successfully",
		})
	} catch (err) {
		console.log(err.message)
	}
}
