import Users from "../models/userModel.js"

export const verifyOtp = async(req, res) => {
	try {
		const { otpVerify, phone } = req.body
		const user = await Users.findOne({ phone: phone })
		if (Number(otpVerify) !== user.otp) {
			return res.status(400).send({
				message: "OTP not matched",
			})
		} else {
			const token = user.generateAuthToken(user)

			res.status(200).send({
				user: user,
				token: token,
				message: "Logged in succesfully",
			})
		}
	} catch (err) {
		console.log(err.message)
	}
}
