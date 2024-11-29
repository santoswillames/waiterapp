import { ListCategoriesUseCase } from '@/app/use-cases/categories/list-categories-use-case'
import type { Request, Response } from 'express'

export async function listCategoriesController(req: Request, res: Response) {
  const listCategoriesUseCase = new ListCategoriesUseCase()

  const categories = await listCategoriesUseCase.execute()

  res.send(categories)
}
