import { z } from "zod";

const orderValidationSchema = z.object({
    email: z.string().email(),
      productId: z.string(),
      price: z.number().positive({ message: "The quantity must be a positive number." }),
      quantity: z.number().positive({ message: "The quantity must be a positive number." })
})

export default orderValidationSchema