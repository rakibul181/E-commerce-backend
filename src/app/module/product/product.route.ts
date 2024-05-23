import express from "express"
import { productControl } from "./product.controller"

const router = express.Router()

router.post("/", productControl.createProduct)
router.get("/", productControl.getAllProduct)
router.get("/:productId", productControl.getProductByID)
router.put("/:productId",productControl.updateProduct)

export const ProductRoutes = router
