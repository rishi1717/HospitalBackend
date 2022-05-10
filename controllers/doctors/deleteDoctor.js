import Doctors from "../../models/doctorModel.js"

export async function deleteDoctor (req, res) {
		if (req.userjwt.role === "doctor" || req.userjwt.role === "admin") {
			try {
				await Doctors.deleteOne({ _id: req.params.id })
				res.status(201).send({ message: "Doctor deleted succesfully" })
			} catch (err) {
				console.log(err.message)
				res.status(500).json({ message: err.message })
			}
		} else {
			res.status(401).json({ message: "not authorized" })
		}
}
