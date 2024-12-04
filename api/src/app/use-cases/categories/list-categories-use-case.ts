import type { CategoryType } from '@/app/models/category'
import type { ICategoryRepository } from '@/app/repositories/category-repository'

export class ListCategoriesUseCase {
  constructor(private categoryRepository: ICategoryRepository) {}

  async execute(): Promise<CategoryType[]> {
    const categories = await this.categoryRepository.findAll()

    return categories
  }
}
