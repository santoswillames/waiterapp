import { MongoOrderRepository } from '@/app/repositories/mongo/mongo-order-repository'
import { UpdateOrderUseCase } from '@/app/use-cases/order/update-order-use-case'
import type { Request, Response } from 'express'

export async function changeOrdersStatusController(
  req: Request,
  res: Response,
) {
  try {
    const { orderId } = req.params
    const { status } = req.body

    if (!['WAITING', 'IN_PRODUCTION', 'DONE'].includes(status)) {
      return res.status(400).json({
        error: 'Status should be one of these: WAITING, IN_PRODUCTION or DONE',
      })
    }

    const orderRepository = new MongoOrderRepository()
    const updateOrderUseCase = new UpdateOrderUseCase(orderRepository)

    await updateOrderUseCase.execute({ id: orderId, status })

    res.sendStatus(204)
  } catch (error) {
    res.sendStatus(500)
  }
}
