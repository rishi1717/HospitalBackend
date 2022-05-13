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
app.use("/api/user", userRoutes)
app.use("/api/doctor", doctorRoutes)
app.use("/api/department", departmentRoutes)
app.use("/api/appointment", appointmentRoutes)
app.use("/api/admin", adminRoutes)
app.use("/api/payment", paymentRoutes)
app.use("/api/prescription", prescriptionRoutes)
app.use("/api/schedule", scheduleRoutes)
app.use("/api/chart", chartRoutes)

app.all("*", (req, res, next) => {
	res.status(404).json({
		status: "fail",
		message: `Can't find ${req.originalUrl} on this server!`,
	})
})

app.use((err, req, res, next) => {
	res.status(500).json({ status: "fail", message: err.message })
})

app.listen(port, (err) => {
	if (err) {
		console.log("error creating server")
	} else {
		console.log(`Listening at http://localhost:${port}`)
	}
})
