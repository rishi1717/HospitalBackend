export async function getDoctors (req, res) {
	if (req.query.id) res.send(req.query.id)
	else res.send("doctors")
}
