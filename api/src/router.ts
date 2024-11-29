import { Router } from 'express'

export const router = Router()

router.get('/categories', (req, res) => {
  res.send('Categoria')
})

router.post('/categories', (req, res) => {
  res.send(' Create Categoria')
})

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
