import express from "express";
import { productControl } from "./product.controller";
 

const router = express.Router()

router.post('/',productControl.createProduct)
router.get('/',productControl.getAllProduct)
router.get('/:id',productControl.getProductByID)

export  const ProductRoutes = router