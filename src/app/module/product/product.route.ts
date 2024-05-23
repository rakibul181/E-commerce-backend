import express from "express"
import { productControl } from "./product.controller"

const router = express.Router()

router.post("/", productControl.createProduct)
router.get("/", productControl.getAllProduct)
router.get("/:productId", productControl.getProductByID)
router.put("/:productId",productControl.updateProduct)
router.delete("/:productId",productControl.deleteProduct)

export const ProductRoutes = router
