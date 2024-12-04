import type { ICategoryRepository } from '@/app/repositories/category-repository'
import type { Types } from 'mongoose'

interface IListCategoryUseCaseResponse {
  _id: Types.ObjectId
  name: string
  icon: string
}

export class ListCategoriesUseCase {
  constructor(private categoryRepository: ICategoryRepository) {}

  async execute(): Promise<IListCategoryUseCaseResponse[]> {
    const categories = await this.categoryRepository.findAll()

    return categories
  }
}
