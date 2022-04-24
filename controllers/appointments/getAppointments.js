import Appointments from "../../models/appointmentModel.js"

export async function getAppointments(req, res) {
	try {
		let appointment = await Appointments.find()
		res.status(201).send({ appointment, message: "appointments found" })
	} catch (err) {
		res.status(500).send({ message: err.message })
	}
}
