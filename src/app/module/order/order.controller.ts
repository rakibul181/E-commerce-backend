import { Request, Response } from "express"
 import { orderService } from "./order.service"
import orderValidationSchema from "./order.validation"

const createOrder = async (req: Request, res: Response) => {
  try {
    const order = req.body
    const zodParse = orderValidationSchema.parse(order)
    
    const result = await orderService.createOrderIntoDB(zodParse)
    res.status(200).json({
      success: true,
      message: "Order created successfully!",
      data: result,
    })
  } catch (error:any) {
    res.status(400).json({
      success: false,
      message: error.message,
    })
  }
}

export const orderController={
    createOrder
}