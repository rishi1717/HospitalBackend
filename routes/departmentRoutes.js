import { Router } from "express"
const router = Router()

import { addDepartment } from "../controllers/departments/addDepartment.js"
import { getDepartments } from "../controllers/departments/getdepartments.js"
import { updateDepartment } from "../controllers/departments/updatedepartment.js"
import { deleteDepartment } from "../controllers/departments/deletedepartment.js"
import authVerify from "../middlewares/authVerify.js"

router.post("/", addDepartment)

router.get("/:id?",authVerify, getDepartments)

router.put("/:id", updateDepartment)

router.delete("/:id", deleteDepartment)

export default router
