import express, { json, urlencoded } from "express"
import cors from "cors"
import connect from "./models/index.js"
import userRoutes from "./routes/userRoutes.js"
import doctorRoutes from "./routes/doctorRoutes.js"
import departmentRoutes from "./routes/departmentRoutes.js"
import appointmentRoutes from "./routes/appointmentRoutes.js"
import adminRoutes from "./routes/adminRoutes.js"
import paymentRoutes from "./routes/paymentRoutes.js"
import prescriptionRoutes from "./routes/prescriptionRoutes.js"
import scheduleRoutes from "./routes/scheduleRoutes.js"
import chartRoutes from "./routes/chartRoutes.js"
import dotenv from "dotenv"
dotenv.config()

connect
const app = express()
const port = process.env.PORT || 3001

//middlewares
app.use(cors())
app.use(json())
app.use(urlencoded({ extended: false }))

//routes
app.use("/user", userRoutes)
app.use("/doctor", doctorRoutes)
app.use("/department", departmentRoutes)
app.use("/appointment", appointmentRoutes)
app.use("/admin", adminRoutes)
app.use("/payment", paymentRoutes)
app.use("/prescription", prescriptionRoutes)
app.use("/schedule", scheduleRoutes)
app.use("/chart", chartRoutes)

app.listen(port, (err) => {
	if (err) {
		console.log("error creating server")
	} else {
		console.log(`Listening at http://localhost:${port}`)
	}
})
