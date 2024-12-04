import { model, Schema } from 'mongoose'
import type { InferSchemaType, Types } from 'mongoose'

const orderSchema = new Schema({
  table: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    enum: ['WAITING', 'IN_PRODUCTION', 'DONE'],
    default: 'WAITING',
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  products: {
    required: true,
    type: [
      {
        product: {
          type: Schema.Types.ObjectId,
          required: true,
          ref: 'Product',
        },
        quantity: {
          type: Number,
          default: 1,
        },
      },
    ],
  },
})

export type OrderSchemaType = InferSchemaType<typeof orderSchema>

export interface OrderType extends OrderSchemaType {
  _id: Types.ObjectId
}

export const Order = model('Order', orderSchema)
