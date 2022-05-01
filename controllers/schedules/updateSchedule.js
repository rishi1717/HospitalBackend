import Schedule from "../../models/scheduleModel.js"

export async function updateSchedule(req, res) {
	try {
		await Schedule.updateOne(
			{ _id: req.params.id },
			{ $set: { ...req.body } }
		)
		const schedule = await Schedule.find({ _id: req.params.id })
		res.status(201).send({
			schedule,
			message: "Schedule Updated succesfully",
		})
	} catch (err) {
		console.log(err.message)
		res.status(500).send({ message: err.message })
	}
}
