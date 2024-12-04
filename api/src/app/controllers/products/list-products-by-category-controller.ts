import { MongoProductRepository } from '@/app/repositories/mongo/mongo-product-repository'
import { ListProductsByCategoryUseCase } from '@/app/use-cases/products/list-products-by-category-use-case'
import type { Request, Response } from 'express'

export async function findProductsByCategoryController(
  req: Request,
  res: Response,
) {
  const { categoryId } = req.params

  const productRepository = new MongoProductRepository()
  const listProductsByCategoryUseCase = new ListProductsByCategoryUseCase(
    productRepository,
  )

  const products = await listProductsByCategoryUseCase.execute(categoryId)

  res.json(products)
}
