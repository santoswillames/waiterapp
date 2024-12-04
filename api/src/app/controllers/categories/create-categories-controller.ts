import { MongoCategoryRepository } from '@/app/repositories/mongo/mongo-category-repository'
import { CreateCategoryUseCase } from '@/app/use-cases/categories/create-categories-use-case'
import type { Request, Response } from 'express'

export async function createCategoriesController(req: Request, res: Response) {
  const { name, icon } = req.body

  try {
    const categoryRepository = new MongoCategoryRepository()
    const createCategoriesUseCase = new CreateCategoryUseCase(
      categoryRepository,
    )

    const category = await createCategoriesUseCase.execute({
      iconRequest: icon,
      nameRequest: name,
    })

    res.status(201).json(category)
  } catch (error) {
    console.log(error)
    res.status(500).json({ messaga: 'Internal Server Error' })
  }
}
