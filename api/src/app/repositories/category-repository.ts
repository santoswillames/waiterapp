import type { Types } from 'mongoose'

export interface ICreateCategory {
  name: string
  icon: string
}

export interface ICategory {
  _id: Types.ObjectId
  name: string | null | undefined
  icon: string | null | undefined
}

export interface ICategoryRepository {
  create(data: ICreateCategory): Promise<ICategory>
  findAll(): Promise<ICategory[]>
}
