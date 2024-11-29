import { model, Schema } from 'mongoose'

export const Category = model(
  'Category',
  new Schema({
    name: {
      type: String,
      requerid: true,
    },
    icon: {
      type: String,
      requerid: true,
    },
  }),
)
