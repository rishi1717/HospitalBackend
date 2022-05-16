import Doctors from "../models/doctorModel.js"

export const verifyOtpDoc = async (req, res) => {
	try {
		const { otpVerify, phone } = req.body
		const doctor = await Doctors.findOne({ phone: phone })
		if (Number(otpVerify) !== doctor.otp) {
			return res.status(400).send({
				message: "OTP not matched",
			})
		} else {
			const token = doctor.generateAuthToken(doctor)

			res.status(200).send({
				doctor: doctor,
				token: token,
				message: "Logged in succesfully",
			})
		}
	} catch (err) {
		console.log(err.message)
	}
}
