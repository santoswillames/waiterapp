import { MongoCategoryRepository } from '@/app/repositories/mongo/mongo-category-repository'
import { ListCategoriesUseCase } from '@/app/use-cases/categories/list-categories-use-case'
import type { Request, Response } from 'express'

export async function findAllCategoriesController(req: Request, res: Response) {
  try {
    const categoryRepository = new MongoCategoryRepository()
    const listCategoriesUseCase = new ListCategoriesUseCase(categoryRepository)

    const categories = await listCategoriesUseCase.execute()

    res.json(categories)
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Internal Server Error' })
  }
}
