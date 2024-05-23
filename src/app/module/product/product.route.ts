import express from "express"
import { productControl } from "./product.controller"

const router = express.Router()

router.post("/", productControl.createProduct)
router.get("/", productControl.getAllProduct)
router.get("/:id", productControl.getProductByID)
router.put("/:id",productControl.updateProduct)

export const ProductRoutes = router
