const express = require("express")
const router = express.Router()
const { userRegister } = require("../controllers/users/userRegister")
const { userLogin } = require("../controllers/users/userLogin")
const { getUsers } = require("../controllers/users/getUsers")
const { updateUser } = require("../controllers/users/updateUser")
const { deleteUser } = require("../controllers/users/deleteUser")

router.post("/login", userLogin)

router.post("/", userRegister)

router.get("/:id?", getUsers)

router.put("/:id", updateUser)

router.delete("/:id", deleteUser)

module.exports = router
