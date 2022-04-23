export async function getUsers (req, res) {
    if(req.query.id)
    res.send(req.query.id)
    else
    res.send("users")
}