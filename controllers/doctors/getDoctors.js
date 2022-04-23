import Doctors from "../../models/doctorModel.js"

export async function getDoctors(req, res) {
	try {
		console.log(req.query.value)
		if (req.query.value) {
			let value = new RegExp(req.query.value, "i")
			let doctors = await Doctors.find({$or:[{ name: value },{department: value}]})
			res.status(201).send({ doctors, message: "got doctors" })
		} else {
			let doctors = await Doctors.find()
			res.status(201).send({ doctors, message: "doctors searched" })
		}
	} catch (err) {
		res.status(500).send({ message: err.message })
	}
}
