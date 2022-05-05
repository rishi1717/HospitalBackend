import Appointment from "../../models/appointmentModel.js"
import dayjs from "dayjs"

export async function getAppointmentByDate(req, res) {
	try {
		const date = dayjs(req.params.date).format("DD/MM/YYYY")
        console.log(date)   
		const appointment = await Appointment.find({
			date: date,
		})
		console.log(appointment)
		res.status(201).send({
			appointment,
			message: "appointments found",
		})
	} catch (err) {
		console.log(err.message)
		res.status(500).send({ message: err.message })
	}
}
