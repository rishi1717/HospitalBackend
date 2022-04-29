import mongoose from "mongoose"
import JWT from "jsonwebtoken"
import dotenv from "dotenv"
dotenv.config()

let adminSchema = new mongoose.Schema(
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

adminSchema.methods.generateAuthToken = (admin) => {
	const token = JWT.sign(
		{ _id: doctor._id, role: "admin" },
		process.env.JWT_KEY,
		{
			expiresIn: "7d",
		}
	)
	return token
}

const Admin = mongoose.model("admin", adminSchema)

export default Admin
