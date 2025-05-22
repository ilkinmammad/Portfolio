import express from "express"
import { createProduct, deleteProduct, getProduct } from "../controller/controller.js"

const productRouter = express.Router()
productRouter.get("/" , getProduct)
productRouter.post("/" , createProduct)
productRouter.delete("/:id" , deleteProduct)



export default productRouter