import { Response, Request } from "express"
import { productService } from "./product.service"
import productValidationSchema from "./product.validation.zod"

const createProduct = async (req: Request, res: Response) => {
  try {
    const product = await req.body
    const zodParse = productValidationSchema.parse(product)
     const result = await productService.createProductIntoDB(zodParse)
    res.status(200).json({
      success: true,
      message: "Product created successfully!",
      data: result,
    })
  } catch (error) {
    console.log("Error: ", error)
    res.status(500).json({
      success: false,
      message: "An error occurred.",
      error,
    })
  }
}

export const productControl = {
  createProduct,
}
