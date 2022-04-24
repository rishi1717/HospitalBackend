import Doctors from "../../models/doctorModel.js"

export async function getDoctors(req, res) {
	try {
		if (req.query.value) {
			let value = new RegExp(req.query.value, "i")
			let doctor = await Doctors.find({$or:[{ name: value },{department: value}]})
			res.status(201).send({ doctor, message: "got doctors" })
		} else {
			let doctor = await Doctors.find()
			res.status(201).send({ doctor, message: "doctors searched" })
		}
	} catch (err) {
		res.status(500).send({ message: err.message })
	}
}
