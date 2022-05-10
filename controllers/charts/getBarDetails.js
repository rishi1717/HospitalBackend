import Appointment from "../../models/appointmentModel.js"
import dayjs from "dayjs"
import customParseFormat from "dayjs/plugin/customParseFormat.js"
dayjs.extend(customParseFormat)
dayjs("12-25-1995", "MM-DD-YYYY")

export async function getBarDetails(req, res) {
	try {
		let appointment = await Appointment.aggregate([
			{ $group: { _id: "$date", amount: { $sum: "$fee" } } },
			{ $sort: { _id: 1 } },
		])
		let dates = [],
			amount = []
		appointment.forEach((element) => {
            const temp = dayjs(element._id, "DD/MM/YYYY").format("DD/MM")
			dates.push(temp)
			amount.push(element.amount)
		})
		res.status(201).send({ dates, amount, message: "details fetched" })
	} catch (err) {
		console.log(err.message)
		res.status(500).send({ message: err.message })
	}
}
