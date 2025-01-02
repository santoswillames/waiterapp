import { IOrderRepository } from '@/app/repositories/order-repository'

export class DeleteOrderUseCase {
  constructor(private orderRepository: IOrderRepository) {}

  async execute(id: string): Promise<void> {
    await this.orderRepository.delete(id)
  }
}
