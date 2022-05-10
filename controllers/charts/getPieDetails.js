import Appointment from "../../models/appointmentModel.js"

export async function getPieDetails(req, res) {
	try {
		let appointment = await Appointment.aggregate([
			{ $group: { _id: "$status", count: { $sum: 1 } } },
			{ $sort: { _id: 1 } },
		])
		let status = [],
			count = []
		appointment.forEach((element) => {
			status.push(element._id)
			count.push(element.count)
		})
		res.status(201).send({ status, count, message: "details fetched" })
	} catch (err) {
		console.log(err.message)
		res.status(500).send({ message: err.message })
	}
}
