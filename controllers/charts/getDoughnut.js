import Departments from "../../models/departmentModel.js"

export async function getDoughnut(req, res) {
    
	try {
        const departments = await Departments.aggregate([
            {
                $project: {count: {$size: "$doctors"}, _id: 0, name: 1}
            }
        ])
        let depName=[], depCount=[]
        departments.map(department => {
            depName.push(department.name)
            depCount.push(department.count)
        })
        console.log(depName, depCount)
        res.status(201).send({ depName, depCount, message: "DoughnutChart fetched succesfully" })
	} catch (err) {
        console.log(err.message);
		res.status(500).json({ message: err.message })
	}
}
