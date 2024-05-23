import express, { Application, Request, Response } from 'express'
import {  ProductRoutes } from './app/module/product/product.route';
import cors from "cors";
const app:Application = express()
 
app.use(cors())
app.use(express.json())

app.use('/api/products',ProductRoutes)

app.get('/', (req:Request, res:Response) => {
  res.send({
    status:'Ok'
  })
})

export default app