import { MongoOrderRepository } from '@/app/repositories/mongo/mongo-order-repository'
import { ListOrderUseCase } from '@/app/use-cases/order/list-order-use-case'
import type { Request, Response } from 'express'

export async function findAllOrdersController(req: Request, res: Response) {
  const orderRepository = new MongoOrderRepository()
  const listOrdersUseCase = new ListOrderUseCase(orderRepository)

  const orders = await listOrdersUseCase.execute()

  res.json(orders)
}
