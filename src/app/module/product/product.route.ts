import express from "express";
import { productControl } from "./product.controller";
 

const router = express.Router()

router.post('/',productControl.createProduct)

export  const ProductRoutes = router