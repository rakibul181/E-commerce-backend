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
  } catch (error: any) {
    res.status(400).json({
      success: false,
      message: error.message,
    })
  }
}

const getAllOrder = async (req: Request, res: Response) => {
  try {
     const result = await orderService.getAllOrderFromDB()
     res.status(200).json({
        success: true,
        message: "Orders fetched successfully!",
        data: result,
      })
  }
  
catch (error) {
    res.status(400).json({
      success: false,
      message: error,
    })
  }
}

export const orderController = {
  createOrder,
  getAllOrder,
}
