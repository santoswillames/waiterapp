import { Category } from '@/app/models/category'
import type {
  ICategory,
  ICategoryRepository,
  ICreateCategory,
} from '../category-repository'

export class MongoCategoryRepository implements ICategoryRepository {
  async create(data: ICreateCategory): Promise<ICategory> {
    const { _id, name, icon } = await Category.create(data)

    const category = {
      _id,
      name,
      icon,
    }

    return category
  }

  async findAll(): Promise<ICategory[]> {
    const response = await Category.find()

    const categories = response.map(({ _id, name, icon }) => ({
      _id,
      name,
      icon,
    }))

    return categories
  }
}
