import Doctors from "../../models/doctorModel.js"
import bcrypt from "bcrypt"
import joi from "joi"

export async function doctorLogin(req, res) {
	try {
		const { error } = validate(req.body)
		if (error)
			return res.status(400).send({ message: error.details[0].message })
		const doctor = await Doctors.findOne({ email: req.body.email })
		if (!doctor) return res.status(401).send({ message: "Invalid email!" })

		const validPassword = await bcrypt.compare(
			req.body.password,
			doctor.password
		)

		if (!validPassword)
			return res.status(401).send({ message: "Invalid password!" })

		const token = doctor.generateAuthToken(doctor)

		res.status(200).send({
			doctor: doctor._id,
			token: token,
			message: "Logged in succesfully",
		})
	} catch (error) {
		console.log(error.message)
        res.status(500).send({ message: error.message })
	}
}

const validate = (data) => {
	const schema = joi.object({
		email: joi.string().required().label("email"),
		password: joi.string().required().label("password"),
	})
	return schema.validate(data)
}
