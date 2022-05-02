import Doctors from "../../models/doctorModel.js"

export async function getDoctors(req, res) {
	try {
		if(req.params.id){
			let doctor = await Doctors.findOne({_id: req.params.id})
			res.status(201).send({ doctor, message: "got doctor details" })
		}
		else {
			let doctor = await Doctors.find()
			res.status(201).send({ doctor, message: "doctors searched" })
		}
	} catch (err) {
		res.status(500).send({ message: err.message })
	}
}
