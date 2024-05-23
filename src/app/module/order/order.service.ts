import { Product } from "../product/product.model"
import { TOrder } from "./order.interface"
import { Order } from "./order.model"

const createOrderIntoDB = async (order: TOrder) => {
  const product = await Product.findById(order.productId)

  if (!product) {
    throw new Error("Product not found")
  }

  if (order.quantity > product.inventory.quantity) {
    throw new Error("Insufficient stock available")
  }
  product.inventory.quantity -= order.quantity

  product.inventory.inStock = product.inventory.quantity > 0

  await product.save()

  const result = await Order.create(order)
  return result
}

export const orderService = {
  createOrderIntoDB,
}
