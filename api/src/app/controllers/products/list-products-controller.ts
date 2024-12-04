import { MongoProductRepository } from '@/app/repositories/mongo/mongo-product-repository'
import { ListProductsUseCase } from '@/app/use-cases/products/list-products-use-case'
import type { Request, Response } from 'express'

export async function findAllProductsController(req: Request, res: Response) {
  const productRepository = new MongoProductRepository()
  const listProductsUseCase = new ListProductsUseCase(productRepository)

  const products = await listProductsUseCase.execute()

  res.json(products)
}
