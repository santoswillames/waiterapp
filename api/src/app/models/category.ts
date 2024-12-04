import { model, Schema } from 'mongoose'
import type { InferSchemaType, Types } from 'mongoose'

const categorySchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  icon: {
    type: String,
    required: true,
  },
})

export type CategorySchemaType = InferSchemaType<typeof categorySchema>

export interface CategoryType extends CategorySchemaType {
  _id: Types.ObjectId
}

export const Category = model<CategoryType>('Category', categorySchema)
