import Schedule from "../../models/scheduleModel.js"

export async function deleteSchedule(req, res) {
	try {
		console.log(req.params.id)
		await Schedule.findByIdAndDelete(req.params.id)
		res.status(201).send({
			message: "Schedule Deleted succesfully",
		})
	} catch (err) {
		console.log(err.message)
		res.status(500).send({ message: err.message })
	}
}
