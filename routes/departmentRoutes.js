import { Router } from "express"
const router = Router()

import { addDepartment } from "../controllers/departments/addDepartment.js"
import { getDepartments } from "../controllers/departments/getdepartments.js"
import { updateDepartment } from "../controllers/departments/updatedepartment.js"
import { deleteDepartment } from "../controllers/departments/deletedepartment.js"
import authVerify from "../middlewares/authVerify.js"

router.post("/", authVerify, addDepartment)

router.get("/:id?",authVerify, getDepartments)

router.put("/:id", authVerify, updateDepartment)

router.delete("/:id", authVerify, deleteDepartment)

export default router
