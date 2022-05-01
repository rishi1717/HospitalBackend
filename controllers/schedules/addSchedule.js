import Schedule from "../../models/scheduleModel.js"
import joi from "joi"

export async function addSchedule(req, res) {
	try {
		const { error } = validate(req.body)
		if (error)
			return res.status(400).send({ message: error.details[0].message })

		await new Schedule({ ...req.body }).save()
		res.status(201).send({ message: "Schedule created succesfully" })
	} catch (err) {
		res.status(500).json({ message: err.message })
	}
}

const validate = (data) => {
	const schema = joi.object({
		doctorId: joi.string().required().label("doctorId"),
		detail: joi.string().required().label("detail"),
		status: joi.string().required().label("status"),
		date: joi.string().required().label("date"),
	})
	return schema.validate(data)
}
