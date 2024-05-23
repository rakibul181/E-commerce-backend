import { TProduct } from "./product.interface"
import { Product } from "./product.model"

const createProductIntoDB = async (product: TProduct) => {
  const result = await Product.create(product)
  return result
}

const getAllProductFromDB = async()=>{
  const result = await Product.find()
  return result 
}

export const productService = {
  createProductIntoDB,
  getAllProductFromDB
}

