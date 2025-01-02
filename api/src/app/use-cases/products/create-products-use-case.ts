import type { ProductSchemaType, ProductType } from '@/app/models/product'
import type { IProductRepository } from '@/app/repositories/product-repository'

export class CreateProductsUseCase {
  constructor(private productRepository: IProductRepository) {}

  async execute({
    name,
    category,
    description,
    imagePath,
    ingredients,
    price,
  }: ProductSchemaType): Promise<ProductType> {
    const product = await this.productRepository.create({
      name,
      category,
      description,
      imagePath,
      ingredients,
      price,
    })

    return product
  }
}
