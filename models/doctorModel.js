import mongoose from "mongoose"
import JWT from "jsonwebtoken"
import dotenv from "dotenv"
dotenv.config()

let doctorSchema = new mongoose.Schema(
	{
		name: String,
		department: String,
		qualification: String,
		expertise: String,
		experience: String,
		days: String,
		time: String,
		fee: Array,
	},
	{ timestamps: true }
)

doctorSchema.methods.generateAuthToken = (doctor) => {
	const token = JWT.sign({ _id: doctor._id }, process.env.JWT_KEY, {
		expiresIn: "7d",
	})
	return token
}

const Doctors = mongoose.model("user", doctorSchema)

export default Doctors
