import { Router } from "express"
const router = Router()
import { userRegister } from "../controllers/users/userRegister.js"
import { userLogin } from "../controllers/users/userLogin.js"
import { getUsers } from "../controllers/users/getUsers.js"
import { updateUser } from "../controllers/users/updateUser.js"
import { deleteUser } from "../controllers/users/deleteUser.js"
import authVerify from "../middlewares/authVerify.js"

router.post("/login", userLogin)

router.post("/", userRegister)

router.get("/:id?", authVerify, getUsers)

router.put("/:id", authVerify, updateUser)

router.delete("/:id", authVerify, deleteUser)

export default router
