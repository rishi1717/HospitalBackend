import Users from "../../models/userModel.js"

export async function getLine(req, res) {
	try {
		const users = await Users.aggregate([
			{
				$group: {
					_id: {
						$dateToString: { format: "%d-%m-%Y", date: "$createdAt" },
					},
					count: { $sum: 1 },
				},
			},
			{ $sort: { _id: 1 } },
		])
		let dates = [],count=[]
        users.forEach(user => {
            dates.push(user._id)
            count.push(user.count)
        })
        res.status(201).send({ dates, count, message: "details fetched" })
	} catch (err) {
		console.log(err.message)
		res.status(500).json({ message: err.message })
	}
}
