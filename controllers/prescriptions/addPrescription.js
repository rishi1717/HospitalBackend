import Prescription from "../../models/prescriptionModel.js"
import joi from "joi"

export async function addPrescription(req, res) {
	try {
		const { error } = validate(req.body)
		if (error)
			return res.status(400).send({ message: error.details[0].message })
		await new Prescription({ ...req.body }).save()
		res.status(201).send({ message: "Prescription created succesfully" })
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
		medicine: joi.string().required().label("status"),
		dosage: joi.string().required().label("date"),
		date: joi.string().required().label("time"),
	})
	return schema.validate(data)
}
