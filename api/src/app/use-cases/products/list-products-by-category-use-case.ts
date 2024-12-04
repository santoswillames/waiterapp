import type { ProductType } from '@/app/models/product'
import type { IProductRepository } from '@/app/repositories/product-rpository'

export class ListProductsByCategoryUseCase {
  constructor(private categoryRepository: IProductRepository) {}

  async execute(categoryId: string): Promise<ProductType[]> {
    const products = await this.categoryRepository.findByCategoryId(categoryId)

    return products
  }
}
