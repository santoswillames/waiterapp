import { Router } from 'express'
import { findAllCategoriesController } from './app/controllers/categories/list-categories-controller'
import { createCategoriesController } from './app/controllers/categories/create-categories-controller'
import { findAllProductsController } from './app/controllers/products/list-products-controller'
import { createProductsController } from './app/controllers/products/create-products-controller'
import { upload } from './app/middlewares/multer'
import { findProductsByCategoryController } from './app/controllers/products/list-products-by-category-controller'
import { createOrdersController } from './app/controllers/orders/create-orders-controller'
import { findAllOrdersController } from './app/controllers/orders/list-orders-controller'
import { changeOrdersStatusController } from './app/controllers/orders/change-orders-status-controller'
import { deleteOrderController } from './app/controllers/orders/delete-orders-controller'

export const router = Router()

router.get('/categories', findAllCategoriesController)

router.post('/categories', createCategoriesController)

router.get('/products', findAllProductsController)

router.post('/products', upload.single('image'), createProductsController)

router.get('/categories/:categoryId/products', findProductsByCategoryController)

router.get('/orders', findAllOrdersController)

router.post('/orders', createOrdersController)

router.patch('/orders/:orderId', changeOrdersStatusController)

router.delete('/orders/:orderId', deleteOrderController)
