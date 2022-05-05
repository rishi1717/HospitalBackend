import Prescription from "../../models/prescriptionModel.js"
import joi from "joi"
import dayjs from "dayjs"

export async function addPrescription(req, res) {
	try {
		const { error } = validate(req.body)
		const data ={ ...req.body,date:dayjs(req.body.date).format("DD/MM/YYYY")}
		if (error)
			return res.status(400).send({ message: error.details[0].message })
		await new Prescription({ ...data}).save()
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
		prescribedFor: joi.string().required().label("for"),
		date: joi.string().required().label("time"),
	})
	return schema.validate(data)
}
