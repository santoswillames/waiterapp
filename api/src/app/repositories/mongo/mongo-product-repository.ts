import { Product } from '@/app/models/product'
import type { ProductSchemaType, ProductType } from '@/app/models/product'
import type { IProductRepository } from '../product-rpository'

export class MongoProductRepository implements IProductRepository {
  async create(data: ProductSchemaType): Promise<ProductType> {
    const product = await Product.create(data)

    return product
  }

  async findAll(): Promise<ProductType[]> {
    const products = await Product.find()

    return products
  }
}
