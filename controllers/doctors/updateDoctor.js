import Doctors from "../../models/doctorModel.js"
import joi from "joi"

export async function updateDoctor(req, res) {
	try {
		if (req.userjwt.role === "doctor" || req.userjwt.role === "admin") {
			const updateData = {...req.body,image:req.file ? req.file.path : req.body.image}
			const { error } = validate(updateData)
			if (error)
				return res.status(400).send({ message: error.details[0].message })
			await Doctors.updateOne({ _id: req.params.id }, { ...updateData })
			const doctor = await Doctors.find({ _id: req.params.id })
			res.status(201).send({ doctor, message: "doctor Updated succesfully" })
		}
		else{
			res.status(401).json({ message: "not authorized" })
		}
	} catch (err) {
		res.status(500).json({ message: err.message })
	}
}

const validate = (data) => {
	const schema = joi.object({
		name: joi.string().required().label("name"),
		email: joi.string().required().label("email"),
		department: joi.string().required().label("department"),
		qualification: joi.string().required().label("qualification"),
		expertise: joi.string().required().label("expertise"),
		experience: joi.string().required().label("experience"),
		// days: joi.array().required().label("days"),
		startTime: joi.string().required().label("startTime"),
		endTime: joi.string().required().label("endTime"),
		fee: joi.number().required().label("fee"),
		image: joi.allow().label("image"),
	})
	return schema.validate(data)
}
