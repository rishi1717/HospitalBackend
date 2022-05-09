import { Router } from "express"
const router = Router()
import authVerify from "../middlewares/authVerify.js"
import { addAdmin } from "../controllers/admins/addAdmin.js"
import { getAdmins } from "../controllers/admins/getAdmins.js"
import { updateAdmin } from "../controllers/admins/updateAdmin.js"
import { deleteAdmin } from "../controllers/admins/deleteAdmin.js"
import { adminLogin } from "../controllers/admins/adminLogin.js"
import { getSubAdmins } from "../controllers/admins/getSubAdmins.js"

router.post("/", authVerify, addAdmin)

router.post("/login", authVerify,  adminLogin)

router.get("/", authVerify, getAdmins)

router.get("/admins", authVerify, getSubAdmins)

router.put("/:id", authVerify, updateAdmin)

router.delete("/:id", authVerify, deleteAdmin)

export default router
