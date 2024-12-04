import express from 'express'
import type { NextFunction, Request, Response } from 'express'
import mongoose from 'mongoose'
import { router } from './router'
import path from 'node:path'

mongoose
  .connect('mongodb://localhost:27017')
  .then(() => {
    const app = express()
    const PORT = 3333

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    app.use((err: Error, _req: Request, res: Response, _next: NextFunction) => {
      console.log('### Error Handler')
      console.log(err)
      res.sendStatus(500)
    })

    app.use(
      '/uploads',
      express.static(path.resolve(__dirname, '..', 'uploads')),
    )
    app.use(express.json())
    app.use(router)

    app.listen(PORT, () =>
      console.log(`🚀 Server is running on http://localhost:${PORT}`),
    )
  })
  .catch(() => console.log('Erro ao conectar com o mongo'))
