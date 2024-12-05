import express from "express"
import { registro, SignIn } from "../controller/authControl.js";

const AuthRoutes = express.Router()

AuthRoutes.post('/registro', registro)
AuthRoutes.post('/login', SignIn)

export { AuthRoutes }