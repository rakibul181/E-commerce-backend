import express, { Application, Request, Response } from "express"
import { ProductRoutes } from "./app/module/product/product.route"
import cors from "cors"
import {  OrderRoutes } from "./app/module/order/order.route"
import { notFoundMiddleware } from "./app/utility"
const app: Application = express()

app.use(cors())
app.use(express.json())

app.use("/api/products", ProductRoutes)
app.use("/api/orders",OrderRoutes)

app.get("/", (req: Request, res: Response) => {
  res.send({
    status: "Ok",
  })
})

app.use(notFoundMiddleware)

export default app
