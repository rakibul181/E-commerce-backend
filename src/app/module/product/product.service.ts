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
const getProductByIDFromDB = async (productId: string) => {
  const result = await Product.findById(productId)
  return result
}
const updateProductByID = async (productId: string,product: TProduct) => {
  const result = await Product.findByIdAndUpdate(productId,product,{new: true})
  return result
}

const deleteProductByIdFromDB = async(productId:string)=>{
  const result = await Product.findByIdAndDelete(productId)
  return result
}

export const productService = {
  createProductIntoDB,
  getAllProductFromDB,
  getProductByIDFromDB,
  updateProductByID,
deleteProductByIdFromDB
}