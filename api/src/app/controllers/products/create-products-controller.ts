import { MongoProductRepository } from '@/app/repositories/mongo/mongo-product-repository'
import { CreateProductsUseCase } from '@/app/use-cases/products/create-products-use-case'

import type { Request, Response } from 'express'

export async function createProductsController(req: Request, res: Response) {
  try {
    const imagePath = req.file?.filename
    const { name, description, price, category, ingredients } = req.body

    if (!imagePath) {
      throw new Error('Image is required')
    }

    const productRepository = new MongoProductRepository()
    const createProductsUseCase = new CreateProductsUseCase(productRepository)

    const product = await createProductsUseCase.execute({
      name,
      description,
      price: Number(price),
      category,
      imagePath,
      ingredients: ingredients ? JSON.parse(ingredients) : [],
    })

    res.status(201).json(product)
  } catch (error) {
    console.log(error)
    if (error instanceof Error && error.message.includes('Image')) {
      res.status(400).send({ message: error.message })
    }
    res.sendStatus(500)
  }
}
