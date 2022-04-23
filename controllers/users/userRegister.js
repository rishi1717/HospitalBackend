import Users from "../../models/userModel.js"
import joi from "joi"
import passwordComplexity from "joi-password-complexity"
import bcrypt from "bcrypt"

export async function userRegister(req, res) {
	console.log(req.body);
	try {
		const { error } = validate(req.body)
		if (error)
			return res.status(400).send({ message: error.details[0].message })
		const user = await Users.findOne({ email: req.body.email })
		if (user)
			return res
				.status(409)
				.send({ message: "User with this email already exist!" })

		const salt = await bcrypt.genSalt(Number(process.env.SALT))
		const hashPassword = await bcrypt.hash(req.body.password, salt)

		await new Users({ ...req.body, password: hashPassword }).save()
		res.status(201).send({ message: "User created succesfully" })
	} catch (err) {
		res.status(500).json({ message: err.message })
	}
}

const validate = (data) => {
	const schema = joi.object({
		firstName: joi.string().required().label("firstName"),
		secondName: joi.string().required().label("secondName"),
		age: joi.number().required().label("age"),
		gender: joi.string().required().label("gender"),
		email: joi.string().required().label("email"),
		phone: joi.string().label("phone"),
		password: passwordComplexity().required().label("password"),
	})
	return schema.validate(data)
}
