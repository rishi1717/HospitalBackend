import Appointment from "../../models/appointmentModel.js"

export async function getBarDetails(req, res) {
	try {
		let appointment = await Appointment.aggregate([
			{ $group: { _id: "$date", amount: { $sum: "$fee" } } },
			{ $sort: { _id: 1 } },
		])
		let dates = [],
			amount = []
		appointment.forEach((element) => {
			dates.push(element._id)
			amount.push(element.amount)
		})
		res.status(201).send({ dates, amount, message: "details fetched" })
	} catch (err) {
		console.log(err.message)
		res.status(500).send({ message: err.message })
	}
}
