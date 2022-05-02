import Schedule from "../../models/scheduleModel.js"

export async function deleteSchedule(req, res) {
	try {
		await Schedule.findByIdAndDelete(req.params.id)
		res.status(201).send({
			message: "Schedule Deleted succesfully",
		})
	} catch (err) {
		res.status(500).send({ message: err.message })
	}
}
