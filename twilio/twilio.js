import twilio from "twilio"
import dotenv from "dotenv"
dotenv.config()

const accountSid = process.env.TWILIO_ACCOUNT_SID
const authToken = process.env.TWILIO_AUTH_TOKEN
const serviceSid = process.env.TWILIO_SERVICE_ID

export const sendSms = (phone, message) => {
	console.log(phone)
	const client = new twilio(accountSid, authToken)
	client.verify.services(serviceSid).verificationChecks
		.create({
			body: message,
			from: process.env.TWILIO_PHONE_NUMBER,
			to: phone,
		})
		.then((message) => console.log(message.sid))
}

