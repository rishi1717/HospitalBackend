import Department from "../../models/departmentModel.js"

export async function deleteDepartment(req, res) {
	try{
		await Department.findOneAndDelete({ _id: req.params.id })
		res.status(201).send({ message: "department deleted succesfully" })
	}catch(err){
		console.log(err.message)
		res.status(500).json({ message: err.message })
	}
}
