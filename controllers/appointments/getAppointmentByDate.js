import Appointment from "../../models/appointmentModel.js"
import dayjs from "dayjs"

export async function getAppointmentByDate(req, res) {
	try {
		const date = dayjs(req.params.date).format("DD/MM/YYYY")
		const appointment = await Appointment.find({
			date: date,
		})
		res.status(201).send({
			appointment,
			message: "appointments found",
		})
	} catch (err) {
		console.log(err.message)
		res.status(500).send({ message: err.message })
	}
}
