import express from "express";
import { addProducts, delProducts, getProducts } from "../controllers/controllers.js";

const router = express.Router();

router.get("/products", getProducts);
router.post("/products", addProducts);
router.post("/products/:id", delProducts);

export default router;
