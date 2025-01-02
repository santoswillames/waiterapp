import type { OrderType, PartialOrderSchemaType } from '../models/order'

export interface IDataOrderUpdate {
  id: string
  status: string
}

export interface IOrderRepository {
  create(data: PartialOrderSchemaType): Promise<OrderType>
  findAll(): Promise<OrderType[]>
  updateById(data: IDataOrderUpdate): Promise<void>
  delete(orderId: string): Promise<void>
}
