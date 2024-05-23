import { TProduct } from "./product.interface"
import { Product } from "./product.model"

const createProductIntoDB = async (product: TProduct) => {
  const result = await Product.create(product)
  return result
}

const getAllProductFromDB = async () => {
  const result = await Product.find()
  return result
}
const getProductByIDFromDB = async (id: string) => {
  const result = await Product.findById(id)
  return result
}
const updateProductByID = async (id: string,product: TProduct) => {
  const result = await Product.findByIdAndUpdate(id,product)
  return result
}

export const productService = {
  createProductIntoDB,
  getAllProductFromDB,
  getProductByIDFromDB,
  updateProductByID,
}
