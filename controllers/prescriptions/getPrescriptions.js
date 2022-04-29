import Prescriptions from "../../models/prescriptionModel.js"

export async function getPrescriptions(req, res) {
	try {
		if (req.query.id) {
			let prescription = await Prescriptions.find({"userId":req.query.id})
			res.status(201).send({ prescription, message: "got prescriptions" })
		} else {
			let prescription = await Prescriptions.find()
			res.status(201).send({ prescription, message: "Prescriptions found" })
		}
	} catch (err) {
		res.status(500).send({ message: err.message })
	}
}