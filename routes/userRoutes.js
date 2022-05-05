import { Router } from "express"
const router = Router()
import { userRegister } from "../controllers/users/userRegister.js"
import { userLogin } from "../controllers/users/userLogin.js"
import { getUsers } from "../controllers/users/getUsers.js"
import { updateUser } from "../controllers/users/updateUser.js"
import { deleteUser } from "../controllers/users/deleteUser.js"
import authVerify from "../middlewares/authVerify.js"
import multer from 'multer'
import { v2 as cloudinary } from "cloudinary"
import {CloudinaryStorage} from 'multer-storage-cloudinary'
import { getDoctorUsers } from "../controllers/users/getDoctorUsers.js"

const storage = new CloudinaryStorage({
	cloudinary: cloudinary,
	params: {
		folder: "Profile",
	},
})

const upload = multer({storage:storage})

cloudinary.config({
	cloud_name: process.env.CLOUDINARY_NAME,
	api_key: process.env.CLOUDINARY_API_KEY,
	api_secret: process.env.CLOUDINARY_API_SECRET,
})

router.post("/login", userLogin)

router.post("/", upload.single('image'), userRegister)

router.get("/:id?", authVerify, getUsers)

router.get("/doctor/:id?", authVerify, getDoctorUsers)

router.put("/:id", upload.single('image'), authVerify, updateUser)

router.delete("/:id", authVerify, deleteUser)

export default router
