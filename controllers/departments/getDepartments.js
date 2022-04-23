export async function getDepartments (req, res) {
	if (req.query.id) res.send(req.query.id)
	else res.send("got departments")
}
