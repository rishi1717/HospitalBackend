import Doctors from "../../models/doctorModel.js"
import joi from "joi"

export async function updateDoctor(req, res) {
	try {
		console.log(req.body)
		if (req.userjwt.role === "doctor" || req.userjwt.role === "admin") {
			const updateData = {
				name: req.body.name,
				email: req.body.email,
				department: req.body.department,
				qualification: req.body.qualification,
				expertise: req.body.expertise,
				experience: req.body.experience,
				// days: req.body.days,
				startTime: req.body.startTime,
				endTime: req.body.endTime,
				fee: req.body.fee,
				image: req.file ? req.file.path : req.body.image,
			}
			const { error } = validate(updateData)
			if (error) {
				console.log(error.details[0].message)
				return res.status(400).send({ message: error.details[0].message })
			}

			await Doctors.updateOne({ _id: req.params.id }, { ...updateData, active:req.body.active })
			res.status(201).send({ message: "doctor Updated succesfully" })
		} else {
			res.status(401).json({ message: "not authorized" })
		}
	} catch (err) {
		console.log(err.message)
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
		active: joi.allow(),
	})
	return schema.validate(data)
}
