import { z } from "zod"

const errorMessages = "The field is required."

const productValidationSchema = z.object({
  name: z.string().min(5, { message: errorMessages }),
  description: z.string().min(20, { message: errorMessages }).max(1000),
  price: z
    .number()
    .positive({ message: "The price must be a positive number." }),
  category: z.string().min(3, { message: errorMessages }).max(255),
  tags: z.array(z.string()),
  variants: z.array(
    z.object({
      type: z.string().min(1, { message: errorMessages }).max(255),
      value: z.string().min(1, { message: errorMessages }).max(255),
    }),
  ),
  inventory: z.object({
    quantity: z
      .number()
      .positive({ message: "The quantity must be a positive number." }),
    inStock: z.boolean(),
  }),
})
export default productValidationSchema
