import mongoose from "mongoose"
import dotenv from "dotenv"
dotenv.config()

let appointmentSchema = new mongoose.Schema({
    userId:Number,
    doctorId:Number,
	user: String,
	doctor: String,
	status: String,
	date: String,
	time: String,
})

const Payment = mongoose.model("user", appointmentSchema)

export default Payment
