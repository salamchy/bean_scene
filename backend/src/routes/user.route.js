import express from "express"
import { registerUser, loginUser, logoutUser } from "../controllers/user.controller.js"
import { validateLogin, validateRegister } from "../middlewares/validateUser.js";
import { verifyToken } from "../middlewares/verifyToken.js";

const router = express.Router();

//user register router
router.route("/register").post(registerUser, validateRegister);

//login user router
router.route("/login").post(loginUser, validateLogin);

//logout user router
router.route("/logout").post(logoutUser, verifyToken);

export default router;