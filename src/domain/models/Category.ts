import { Schema, model } from 'mongoose'

export interface ICategory {
  name: string
}

const categorySchema = new Schema<ICategory>({
  name: { type: String }
}, { versionKey: false })

export const Category = model<ICategory>('Category', categorySchema)
