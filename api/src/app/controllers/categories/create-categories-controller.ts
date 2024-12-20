import { MongoCategoryRepository } from '@/app/repositories/mongo/mongo-category-repository'
import { CreateCategoryUseCase } from '@/app/use-cases/categories/create-categories-use-case'
import type { Request, Response } from 'express'

export async function createCategoriesController(req: Request, res: Response) {
  const { name, icon } = req.body

  const categoryRepository = new MongoCategoryRepository()
  const createCategoriesUseCase = new CreateCategoryUseCase(categoryRepository)

  const category = await createCategoriesUseCase.execute({
    icon,
    name,
  })

  res.status(201).json(category)
}
