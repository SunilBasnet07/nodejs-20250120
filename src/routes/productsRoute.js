import express from "express";
import { createProduct, deleteProduct, getAllProducts, getCategories, getProductById, updateProduct } from "../controllers/productControllers.js";

const router = express.Router();

router.get("/",getAllProducts);
router.get("/:id",getProductById);
router.get("/categories",getCategories);
router.post("/",createProduct);
router.put("/:id",updateProduct);
router.delete("/:id",deleteProduct);

export default router;