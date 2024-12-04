import type { ProductSchemaType, ProductType } from '../models/product'

export interface IProductRepository {
  create(data: ProductSchemaType): Promise<ProductType>
  findAll(): Promise<ProductType[]>
  findByCategoryId(categoryId: string): Promise<ProductType[]>
}
