import express from "express";
import { productControl } from "./product.controller";
 

const router = express.Router()

router.post('/',productControl.createProduct)
router.get('/',productControl.getAllProduct)

export  const ProductRoutes = router