import mongoose from "mongoose"
import dotenv from "dotenv"
dotenv.config()

let appointmentSchema = new mongoose.Schema({
    userId:String,
    doctorId:String,
	user: String,
	doctor: String,
	status: String,
	date: String,
	time: String,
})

const Appointment = mongoose.model("appointment", appointmentSchema)

export default Appointment
