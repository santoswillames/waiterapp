/* eslint-disable @typescript-eslint/no-unused-vars */
import type { ICategoryRepository } from '@/app/repositories/category-repository'
import type { Types } from 'mongoose'

interface ICreateCategoryUseCaseRequest {
  nameRequest: string
  iconRequest: string
}

interface ICreateCategoryUseCaseResponse {
  _id: Types.ObjectId
  name: string
  icon: string
}

export class CreateCategoryUseCase {
  constructor(private categoryRepository: ICategoryRepository) {}

  async execute({
    nameRequest,
    iconRequest,
  }: ICreateCategoryUseCaseRequest): Promise<ICreateCategoryUseCaseResponse> {
    const category = await this.categoryRepository.create({
      name: nameRequest,
      icon: iconRequest,
    })

    return category
  }
}
