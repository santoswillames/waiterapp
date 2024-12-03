import { Category } from '@/app/models/category'
import type { Types } from 'mongoose'

interface IListCategoryUseCaseResponse {
  _id: Types.ObjectId
  name: string | null | undefined
  icon: string | null | undefined
}

export class ListCategoriesUseCase {
  async execute(): Promise<IListCategoryUseCaseResponse[]> {
    const response = await Category.find()

    const categories = response.map(({ _id, name, icon }) => ({
      _id,
      name,
      icon,
    }))

    return categories
  }
}
