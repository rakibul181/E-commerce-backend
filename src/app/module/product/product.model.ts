import { Schema, model } from "mongoose"
import { TProduct } from "./product.interface"

const productSchema = new Schema<TProduct>({
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    tags: {
      type: [String],
      default: [],
    },
    variants: {
      type: [
        {
          type: {
            type: String,
            required:true,
        
          },
          value: {
            type: String,
            required:true,
          },
        },
      ],
     
      default: [],
    },
    inventory: {
      quantity: {
        type: Number,
        required: true,
      },
      inStock: {
        type: Boolean,
        required: true,
      },
    },
  });

export const Product = model<TProduct>("Product", productSchema)
