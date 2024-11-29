import { Category } from '@/app/models/category'

export class ListCategoriesUseCase {
  async execute() {
    const categories = await Category.find()

    return categories
  }
}
