import type { ProductType } from '@/app/models/product'
import type { IProductRepository } from '@/app/repositories/product-rpository'

export class ListProductsUseCase {
  constructor(private categoryRepository: IProductRepository) {}

  async execute(): Promise<ProductType[]> {
    const products = await this.categoryRepository.findAll()

    return products
  }
}
