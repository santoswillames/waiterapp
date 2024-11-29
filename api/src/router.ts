import { Router } from 'express'
import { listCategoriesController } from './app/controllers/categories/list-categories-controller'
import { createCategoriesController } from './app/controllers/categories/create-categories-controller'

export const router = Router()

router.get('/categories', listCategoriesController)

router.post('/categories', createCategoriesController)

router.get('/products', (req, res) => {
  res.send('Produtos')
})

router.post('/products', (req, res) => {
  res.send(' Create Produtos')
})

router.get('/categories/:categoryId/products', (req, res) => {
  res.send('Produtos por categoria')
})

router.get('/orders', (req, res) => {
  res.send('Pedidos')
})

router.post('/orders', (req, res) => {
  res.send('Create PEdidos')
})

router.patch('/orders/:orderId', (req, res) => {
  res.send('update status PEdidos')
})

router.delete('/orders/:orderId', (req, res) => {
  res.send('Delete PEdidos')
})
