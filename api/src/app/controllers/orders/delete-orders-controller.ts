import { MongoOrderRepository } from '@/app/repositories/mongo/mongo-order-repository'
import { DeleteOrderUseCase } from '@/app/use-cases/order/delete-order-use-case'
import { Request, Response } from 'express'

export async function deleteOrderController(req: Request, res: Response) {
  const { orderId } = req.params

  const orderRepository = new MongoOrderRepository()
  const deleteOrderUseCase = new DeleteOrderUseCase(orderRepository)

  await deleteOrderUseCase.execute(orderId)

  res.sendStatus(204)
}
