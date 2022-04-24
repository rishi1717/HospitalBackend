import Appointment from "../../models/appointmentModel.js"
import joi from "joi"

export async function addAppointment(req, res) {
	try {
		const { error } = validate(req.body)
		if (error)
			return res.status(400).send({ message: error.details[0].message })

		await new Appointment({ ...req.body }).save()
		res.status(201).send({ message: "Appointment created succesfully" })
	} catch (err) {
		res.status(500).json({ message: err.message })
	}
}

const validate = (data) => {
	const schema = joi.object({
		userId: joi.string().required().label("UserId"),
		doctorId: joi.string().required().label("doctorId"),
		user: joi.string().required().label("User"),
		doctor: joi.string().required().label("doctor"),
		status: joi.string().required().label("status"),
		date: joi.string().required().label("date"),
		time: joi.string().required().label("time"),
	})
	return schema.validate(data)
}
