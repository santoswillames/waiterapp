import { model, Schema } from 'mongoose'
import type { InferSchemaType, Types } from 'mongoose'

const productSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  imagePath: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  ingredients: {
    type: [
      {
        name: {
          type: String,
          required: true,
        },
        icon: {
          type: String,
          required: true,
        },
      },
    ],
    required: true,
  },
  category: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'Category',
  },
})

export type ProductSchemaType = InferSchemaType<typeof productSchema>

export interface ProductType extends ProductSchemaType {
  _id: Types.ObjectId
}

export const Product = model('Product', productSchema)
