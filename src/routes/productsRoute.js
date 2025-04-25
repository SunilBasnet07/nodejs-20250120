import express from "express";
import { createProduct, deleteProduct, getAllProducts, getProductById, updateProduct } from "../controllers/productControllers.js";

const router = express.Router();

router.get("/",getAllProducts);
router.get("/:id",getProductById);
router.post("/",createProduct);
router.put("/",updateProduct);
router.delete("/",deleteProduct);

export default router;