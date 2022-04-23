exports.userLogin = async function (req, res) {
	try {
		const { error } = validate(req.body)
		if (error)
			return res.status(400).send({ message: error.details[0].message })
		const user = await Users.findOne({ email: req.body.email })
		if (!user) return res.status(401).send({ message: "Invalid email!" })

		const validPassword = await bcrypt.compare(
			req.body.password,
			user.password
		)

		if (!validPassword)
			return res.status(401).send({ message: "Invalid password!" })

		const token = user.generateAuthToken()

		res.status(200).send({
			name: user.name,
			user: token,
			message: "Logged in succesfully",
		})
	} catch (error) {
		res.status(500).send({ message: "Some internal server error occured" })
	}
}
