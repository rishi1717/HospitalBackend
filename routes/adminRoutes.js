import { Router } from "express"
const router = Router()

import { addAdmin } from "../controllers/admins/addAdmin.js"
import { getAdmins } from "../controllers/admins/getAdmins.js"
import { updateAdmin } from "../controllers/admins/updateAdmin.js"
import { deleteAdmin } from "../controllers/admins/deleteAdmin.js"

router.post("/", addAdmin)

router.get("/:id?", getAdmins)

router.put("/:id", updateAdmin)

router.delete("/:id", deleteAdmin)

export default router
