import Appointment from "../../models/appointmentModel.js"
import dayjs from 'dayjs'

export async function getAppointmentDoctor(req, res) {
	try {
        console.log(req.params.id)
        console.log(req.params.date)
        const time = dayjs(req.params.date).format("DD/MM/YYYY")
        console.log(time)
		const appointment = await Appointment.find({doctorId: req.params.id, date: time},{time:1,_id:0})
        const timeArray = appointment.map(appointment => appointment.time)
        console.log(timeArray)
		res.status(201).send({ timeArray, message: "appointments found" })
	} catch (err) {
		res.status(500).send({ message: err.message })
	}
}
