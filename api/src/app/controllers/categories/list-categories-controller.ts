import { MongoCategoryRepository } from '@/app/repositories/mongo/mongo-category-repository'
import { ListCategoriesUseCase } from '@/app/use-cases/categories/list-categories-use-case'
import type { Request, Response } from 'express'

export async function findAllCategoriesController(req: Request, res: Response) {
  const categoryRepository = new MongoCategoryRepository()
  const listCategoriesUseCase = new ListCategoriesUseCase(categoryRepository)

  const categories = await listCategoriesUseCase.execute()

  res.json(categories)
}
