import Appointments from "../../models/appointmentModel.js"

export async function updateAppointment(req, res) {
	try {
		console.log(req.params.id)
		console.log(req.body)
		await Appointments.updateOne({ _id: req.params.id }, {$set:{...req.body}})
		const appointment = await Appointments.find({ _id: req.params.id })
		res.status(201).send({ appointment, message: "Appointment Updated succesfully" })
	} catch (err) {
		console.log(err.message)
		res.status(500).send({ message: err.message })
	}
}
