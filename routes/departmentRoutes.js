const express = require("express")
const router = express.Router()

const { addDepartment } = require("../controllers/departments/addDepartment")
const { getDepartments } = require("../controllers/departments/getdepartments")
const { updateDepartment } = require("../controllers/departments/updatedepartment")
const { deleteDepartment } = require("../controllers/departments/deletedepartment")

router.post("/", addDepartment)

router.get("/:id?", getDepartments)

router.put("/:id", updateDepartment)

router.delete("/:id", deleteDepartment)

module.exports = router
