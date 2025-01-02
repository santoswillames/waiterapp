import { PartialOrderSchemaType, OrderType } from '@/app/models/order'
import { IOrderRepository } from '@/app/repositories/order-repository'

export class CreateOrderUseCase {
  constructor(private orderRepository: IOrderRepository) {}

  async execute({
    products,
    table,
  }: PartialOrderSchemaType): Promise<OrderType> {
    const order = await this.orderRepository.create({
      products,
      table,
    })

    return order
  }
}
