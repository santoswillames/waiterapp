import { Order, type OrderSchemaType, type OrderType } from '@/app/models/order'
import type { IDataOrderUpdate, IOrderRepository } from '../order-repository'

export class MongoOrderRepository implements IOrderRepository {
  async create(data: OrderSchemaType): Promise<OrderType> {
    const order = await Order.create(data)

    return order
  }

  async findAll(): Promise<OrderType[]> {
    const orders = await Order.find()
      .sort({ createdAt: 1 })
      .populate('products.product')

    return orders
  }

  async updateById({ id, status }: IDataOrderUpdate): Promise<void> {
    await Order.findByIdAndUpdate(id, { status })
  }

  async delete(orderId: string): Promise<void> {
    await Order.findByIdAndDelete(orderId)
  }
}
