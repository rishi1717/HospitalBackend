export async function deleteDoctor (req, res) {
	if(req.userjwt.role==='admin'){
		res.send(req.params.id)
	}
	res.send({message:'unauthorized'})
}
