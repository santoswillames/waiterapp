/* eslint-disable @typescript-eslint/no-unused-vars */
import type { CategorySchemaType, CategoryType } from '@/app/models/category'
import type { ICategoryRepository } from '@/app/repositories/category-repository'

export class CreateCategoryUseCase {
  constructor(private categoryRepository: ICategoryRepository) {}

  async execute({ name, icon }: CategorySchemaType): Promise<CategoryType> {
    const category = await this.categoryRepository.create({
      name,
      icon,
    })

    return category
  }
}
