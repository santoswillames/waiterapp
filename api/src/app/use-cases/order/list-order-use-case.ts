import { IOrderRepository } from '@/app/repositories/order-repository'

export class ListOrderUseCase {
  constructor(private orderRepository: IOrderRepository) {}

  async execute() {
    const orders = await this.orderRepository.findAll()

    return orders
  }
}
