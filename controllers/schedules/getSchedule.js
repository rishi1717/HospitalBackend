import Schedule from "../../models/scheduleModel.js"

export async function getSchedule(req, res) {
	try {
		let schedule = await Schedule.find({doctorId:req.query.id})
		res.status(201).send({ schedule, message: "Schedules found" })
	} catch (err) {
		res.status(500).send({ message: err.message })
	}
}
