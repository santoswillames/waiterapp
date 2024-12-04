import type { CategorySchemaType, CategoryType } from '../models/category'

export interface ICategoryRepository {
  create(data: CategorySchemaType): Promise<CategoryType>
  findAll(): Promise<CategoryType[]>
}
