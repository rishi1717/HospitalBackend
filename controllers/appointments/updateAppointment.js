import Appointment from "../../models/appointmentModel.js"

export async function updateAppointment(req, res) {
	try {
		await Appointment.updateOne({ _id: req.params.id }, {$set:{...req.body}})
		const appointment = await Appointment.find({ _id: req.params.id })
		res.status(201).send({ appointment, message: "Appointment Updated succesfully" })
	} catch (err) {
		res.status(500).send({ message: err.message })
	}
}
