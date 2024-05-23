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
const updateProductByID = async (productId: string, product: TProduct) => {
  const result = await Product.findByIdAndUpdate(productId, product, {
    new: true,
  })
  return result
}

const deleteProductByIdFromDB = async (productId: string) => {
  const result = await Product.findByIdAndDelete(productId)
  return result
}

const searchProductOnDB = async (searchTerm: string) => {
  const regex = new RegExp(searchTerm, "i")

  const result = await Product.find({
    $or: [
      { name: regex },
      { description: regex },
      { category: regex },
      { tags: regex },
    ],
  })

  return result
}

export const productService = {
  createProductIntoDB,
  getAllProductFromDB,
  getProductByIDFromDB,
  updateProductByID,
  deleteProductByIdFromDB,
  searchProductOnDB,
}
