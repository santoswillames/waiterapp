import { MongoOrderRepository } from '@/app/repositories/mongo/mongo-order-repository'
import { CreateOrderUseCase } from '@/app/use-cases/order/create-order-use-case'
import type { Request, Response } from 'express'

export async function createOrdersController(req: Request, res: Response) {
  const { table, products } = req.body

  const orderRepository = new MongoOrderRepository()
  const createOrderUseCase = new CreateOrderUseCase(orderRepository)

  const order = await createOrderUseCase.execute({ table, products })

  res.status(201).json(order)
}
