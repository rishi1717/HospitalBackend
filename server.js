const express = require("express")
const cors = require("cors")
const connection = require("./models")
const userRoutes = require("./routes/userRoutes")
const doctorRoutes = require("./routes/doctorRoutes")
const departmentRoutes = require("./routes/departmentRoutes")
const appointmentRoutes = require("./routes/appointmentRoutes")
const adminRoutes = require("./routes/adminRoutes")
const paymentRoutes = require("./routes/paymentRoutes")
require("dotenv").config()

const app = express()
const port = process.env.PORT || 3001

//middlewares
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

//routes
app.use("/user", userRoutes)
app.use("/doctor", doctorRoutes)
app.use("/department", departmentRoutes)
app.use("/appointment", appointmentRoutes)
app.use("/admin", adminRoutes)
app.use("/payment", paymentRoutes)

app.listen(port, (err) => {
	if (err) {
		console.log("error creating server")
	} else {
		console.log(`Listening at http://localhost:${port}`)
	}
})
