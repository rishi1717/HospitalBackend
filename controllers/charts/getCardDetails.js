import Doctors from "../../models/doctorModel.js"
import Users from "../../models/userModel.js"

export async function getCardDetails(req, res) {
	try {
		const docCount = await Doctors.countDocuments({})
		const docActive = await Doctors.countDocuments({ active: true })
		const docInactive = await Doctors.countDocuments({ active: false })
		const doctor = [docCount, docActive, docInactive]
		let userCount = await Users.countDocuments({})
		const userActive = await Doctors.countDocuments({ access: true })
		const userInactive = await Doctors.countDocuments({ access: false })
        const user = [userCount, userActive, userInactive]
		res.status(201).send({ doctor, user, message: "details fetched" })
	} catch (err) {
		console.log(err.message)
		res.status(500).send({ message: err.message })
	}
}
