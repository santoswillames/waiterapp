/* eslint-disable @typescript-eslint/no-unused-vars */
import { Category } from '@/app/models/category'
import type { Types } from 'mongoose'

interface ICreateCategoryUseCaseRequest {
  nameRequest: string
  iconRequest: string
}

interface ICreateCategoryUseCaseResponse {
  _id: Types.ObjectId
  name: string | null | undefined
  icon: string | null | undefined
}

export class CreateCategoryUseCase {
  async execute({
    nameRequest,
    iconRequest,
  }: ICreateCategoryUseCaseRequest): Promise<ICreateCategoryUseCaseResponse> {
    const { _id, name, icon } = await Category.create({
      name: nameRequest,
      icon: iconRequest,
    })

    const category = {
      _id,
      name,
      icon,
    }

    return category
  }
}
