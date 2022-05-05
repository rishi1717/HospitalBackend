import Appointment from "../../models/appointmentModel.js"

export async function getAppointments(req, res) {
	try {
		if (req.params.id) {
			let appointment = await Appointment.findOne({ _id: req.params.id })
			res.status(201).send({ appointment, message: "appointment found" })
		} else {
			let appointment = await Appointment.find().sort({ date: 1, time: -1 })
			console.log(appointment)
			res.status(201).send({ appointment, message: "appointments found" })
		}
	} catch (err) {
		console.log(err.message)
		res.status(500).send({ message: err.message })
	}
}
