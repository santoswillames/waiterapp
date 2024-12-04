/* eslint-disable @typescript-eslint/no-unused-vars */
import type { CategoryType } from '@/app/models/category'
import type { ICategoryRepository } from '@/app/repositories/category-repository'

interface ICreateCategoryUseCaseRequest {
  name: string
  icon: string
}

export class CreateCategoryUseCase {
  constructor(private categoryRepository: ICategoryRepository) {}

  async execute({
    name,
    icon,
  }: ICreateCategoryUseCaseRequest): Promise<CategoryType> {
    const category = await this.categoryRepository.create({
      name,
      icon,
    })

    return category
  }
}
