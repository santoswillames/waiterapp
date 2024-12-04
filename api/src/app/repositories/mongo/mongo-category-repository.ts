import { Category } from '@/app/models/category'
import type { CategorySchemaType, CategoryType } from '@/app/models/category'
import type { ICategoryRepository } from '../category-repository'

export class MongoCategoryRepository implements ICategoryRepository {
  async create(data: CategorySchemaType): Promise<CategoryType> {
    const category = await Category.create(data)

    return category
  }

  async findAll(): Promise<CategoryType[]> {
    const categories = await Category.find()

    return categories
  }
}
