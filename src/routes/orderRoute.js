import express from 'express';
import { checkoutOrder, confirmOrder, createOrder, getAllOrders, getOrderById, getOrdersByUser, updateOrdersByStatus } from '../controllers/orderController.js';
import auth from '../middlewares/auth.js';
import roleBasedAuth from '../middlewares/roleBasedAuth.js';


const router = express.Router()

router.get("/",auth,roleBasedAuth("ADMIN"),getAllOrders)
router.get("/user",auth,getOrdersByUser)
router.get("/:id",auth,getOrderById);
router.post("/",auth,createOrder)
router.put("/:id/checkout",auth,checkoutOrder)
router.put("/:id/confirm",auth,confirmOrder);
router.put("/status/:id",auth,roleBasedAuth("ADMIN"),updateOrdersByStatus)

export default router