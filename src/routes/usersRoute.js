import express from "express"
import { createUser, deleteUser, getAllUsers, getUserById, updateUser, uploadProfileImage } from "../controllers/userControllers.js";
import auth from "../middlewares/auth.js";

const router = express.Router();

router.get("/",auth,getAllUsers);
router.get("/:id",auth,getUserById);
router.post("/",auth,createUser);
router.put("/:id",auth,updateUser);
router.delete("/:id",auth,deleteUser);
router.put("/profile/upload",auth,uploadProfileImage);

export default router;