import { Router } from "express"
import dotenv from "dotenv"
import authVerify from "../middlewares/authVerify.js"
import { getBarDetails } from "../controllers/charts/getBarDetails.js"
import { getPieDetails } from "../controllers/charts/getPieDetails.js"
dotenv.config()
const router = Router()

router.get('/bar',authVerify, getBarDetails)

router.get('/pie',authVerify, getPieDetails)

export default router
