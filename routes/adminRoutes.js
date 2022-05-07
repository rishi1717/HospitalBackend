import { Router } from "express"
const router = Router()

import { addAdmin } from "../controllers/admins/addAdmin.js"
import { getAdmins } from "../controllers/admins/getAdmins.js"
import { updateAdmin } from "../controllers/admins/updateAdmin.js"
import { deleteAdmin } from "../controllers/admins/deleteAdmin.js"
import { adminLogin } from "../controllers/admins/adminLogin.js"

router.post("/", addAdmin)

router.post("/login", adminLogin)

router.get("/:id?", getAdmins)

router.put("/:id", updateAdmin)

router.delete("/:id", deleteAdmin)

export default router
