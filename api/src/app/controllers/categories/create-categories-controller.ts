import { CreateCategoryUseCase } from '@/app/use-cases/categories/create-categories-use-case'
import type { Request, Response } from 'express'

export async function createCategoriesController(req: Request, res: Response) {
  const { name, icon } = req.body

  const createCategoriesUseCase = new CreateCategoryUseCase()

  const category = await createCategoriesUseCase.execute({
    iconRequest: icon,
    nameRequest: name,
  })

  res.send(category)
}
