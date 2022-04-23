exports.getDoctors = async function (req, res) {
	if (req.query.id) res.send(req.query.id)
	else res.send("doctors")
}
