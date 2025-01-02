import {
  IDataOrderUpdate,
  IOrderRepository,
} from '@/app/repositories/order-repository'

export class UpdateOrderUseCase {
  constructor(private orderRepository: IOrderRepository) {}

  async execute({ id, status }: IDataOrderUpdate): Promise<void> {
    await this.orderRepository.updateById({ id, status })
  }
}
