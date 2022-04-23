import { Router } from "express"
const router = Router()
import { userRegister } from "../controllers/users/userRegister.js"
import { userLogin } from "../controllers/users/userLogin.js"
import { getUsers } from "../controllers/users/getUsers.js"
import { updateUser } from "../controllers/users/updateUser.js"
import { deleteUser } from "../controllers/users/deleteUser.js"

router.post("/login", userLogin)

router.post("/", userRegister)

router.get("/:id?", getUsers)

router.put("/:id", updateUser)

router.delete("/:id", deleteUser)

export default router
