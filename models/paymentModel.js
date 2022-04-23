import mongoose from "mongoose"
import dotenv from "dotenv"
dotenv.config()

let paymentSchema = new mongoose.Schema({
	user:Number,
    doctor:Number,
    fee:Number,
    date:String,
    time:String,
})

const Payment = mongoose.model("payment", paymentSchema)

export default Payment
