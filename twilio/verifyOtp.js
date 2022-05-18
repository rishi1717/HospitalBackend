import twilio from "twilio"
import dotenv from "dotenv"
dotenv.config()

const accountSid = process.env.TWILIO_ACCOUNT_SID
const authToken = process.env.TWILIO_AUTH_TOKEN
const serviceId = process.env.TWILIO_SERVICE_SID

export const verifyOtp = async (req, res) => {
	try {
		const { otpVerify, phone } = req.body
		const client = new twilio(accountSid, authToken)
		const check = await client.verify
			.services(serviceId)
			.verificationChecks.create({ to: phone, code: otpVerify })
		console.log(check.status)
	} catch (err) {
		console.log(err.message)
	}
}
