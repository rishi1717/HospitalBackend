import Users from "../../models/userModel.js"
import joi from "joi"

export async function updateUser(req, res) {
	try {
		const { error } = validate({
			firstName: req.body.firstName,
			secondName: req.body.secondName,
			age: req.body.age,
			gender: req.body.gender,
			email: req.body.email,
			phone: req.body.phone,
			blood: req.body.blood,
		})
		if (error)
			return res.status(400).send({ message: error.details[0].message })
          console.log(req.params.id);
		await Users.updateOne({ _id: req.params.id }, { ...req.body })
		const user = await Users.find({ _id: req.params.id })
		res.status(201).send({ user, message: "User Updated succesfully" })
	} catch (err) {
		console.log(err.message)
		res.status(500).json({ message: "Internal server error" })
	}
}

const validate = (data) => {
	const schema = joi.object({
		firstName: joi.string().label("firstName"),
		secondName: joi.string().label("secondName"),
		age: joi.number().label("age"),
		gender: joi.string().label("gender"),
		email: joi.string().label("email"),
		phone: joi.string().label("phone"),
		blood: joi.string().label("blood"),
	})
	return schema.validate(data)
}
