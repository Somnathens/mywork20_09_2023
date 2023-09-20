import { Router } from "express";
const router = Router();
import sellerRoutes from './seller/index.js'
import userRouter from './user/index.js'
import { createUser } from "./seller/controller/index.js";
 
router.use("/seller", sellerRoutes);
router.use("/user", createUser);
 

export default router;