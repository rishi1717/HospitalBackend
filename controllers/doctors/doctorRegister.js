import Doctors from "../../models/doctorModel.js"
import joi from "joi"
import passwordComplexity from "joi-password-complexity"
import bcrypt from "bcrypt"

export async function doctorRegister(req, res) {
	try {
		const dayArray = JSON.parse( req.body.days)

		const { error } = validate({
			...req.body,
			days: dayArray,
			image: req.file ? req.file.path : req.body.image,
		})
		if (error)
			return res.status(400).send({ message: error.details[0].message })
		const doctor = await Doctors.findOne({ email: req.body.email })
		if (doctor)
			return res
				.status(409)
				.send({ message: "doctor with this email already exist!" })

		const salt = await bcrypt.genSalt(Number(process.env.SALT))
		const hashPassword = await bcrypt.hash(req.body.password, salt)

		await new Doctors({
			...req.body,
			password: hashPassword,
			admin: false,
			active: true,
			days: dayArray,
			image: req.file ? req.file.path : req.body.image,
		}).save()
		res.status(201).send({ message: "doctor created succesfully" })
	} catch (err) {
		res.status(500).json({ message: err.message })
	}
}

const validate = (data) => {
	const schema = joi.object({
		name: joi.string().required().label("name"),
		email:joi.string().required().label("email"),
		department: joi.string().required().label("department"),
		qualification: joi.string().required().label("qualification"),
		expertise: joi.string().required().label("expertise"),
		experience: joi.string().required().label("experience"),
		days: joi.array().required().label("days"),
		startTime: joi.string().required().label("startTime"),
		endTime: joi.string().required().label("endTime"),
		fee: joi.number().required().label("fee"),
		password: passwordComplexity().required().label("password"),
		request: joi.boolean().label("request"),
		image: joi.allow(),
		admin: joi.boolean().label("admin"),
	})
	return schema.validate(data)
}
