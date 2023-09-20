import { Router } from "express";
const router = Router();
import createSeller from "./controller/index.js";

router.post("/create", createSeller);


export default router;