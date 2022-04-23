import mongoose from "mongoose"
import dotenv from "dotenv"
dotenv.config()

let departmentSchema = new mongoose.Schema(
	{
		name: String,
		doctors:Array
	},
)

const Departments = mongoose.model("department", departmentSchema)

export default Departments
