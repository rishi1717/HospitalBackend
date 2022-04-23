import mongoose from "mongoose"
import dotenv from "dotenv"
dotenv.config()

let departmentSchema = new mongoose.Schema(
	{
		name: String,
		doctor:Array
	},
)

const Departments = mongoose.model("user", departmentSchema)

export default Departments
