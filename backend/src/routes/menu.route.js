import express from "express";
import { createMenu, deleteMenu, getAdminCoffee, getAllCoffee, updateCoffee } from "../controllers/menu.controller.js";
import upload from "../middlewares/upload.js";
import { menuValidation, validate } from "../middlewares/validateMenu.js";
import { verifyToken } from "../middlewares/verifyToken.js";
import { verifyAdmin } from "../middlewares/verifyAdmin.js";


const router = express.Router();

router.route("/create-menu").post( upload.single('image'), menuValidation, validate, createMenu);

router.route("/list").post(getAllCoffee);
router.route("/admin-list").post(getAdminCoffee, verifyToken, verifyAdmin);
router.route("/update").post(updateCoffee, verifyToken, verifyAdmin);
router.route("/:id").post(deleteMenu, verifyToken, verifyAdmin);


export default router;