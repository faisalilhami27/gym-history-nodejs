import { Schema, model } from 'mongoose'

export interface IMovement {
  name: string
}

const movementSchema = new Schema<IMovement>({
  name: { type: String }
}, { versionKey: false })

export const Movement = model<IMovement>('Movement', movementSchema)
