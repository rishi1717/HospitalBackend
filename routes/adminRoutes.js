const express = require("express")
const router = express.Router()

const { addAdmin } = require("../controllers/admins/addAdmin")
const { getAdmins } = require("../controllers/admins/getAdmins")
const { updateAdmin } = require("../controllers/admins/updateAdmin")
const { deleteAdmin } = require("../controllers/admins/deleteAdmin")

router.post("/", addAdmin)

router.get("/:id?", getAdmins)

router.put("/:id", updateAdmin)

router.delete("/:id", deleteAdmin)

module.exports = router
