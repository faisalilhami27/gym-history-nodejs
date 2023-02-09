import { Schema, model } from 'mongoose'

export interface IHistory {
  category_id: Schema.Types.ObjectId,
  movement_id: Schema.Types.ObjectId,
  date: Date,
  detail_set: [
    {
      set: number,
      repetition: number,
      weight: number,
      description: string
    }
  ]
}

const historySchema = new Schema<IHistory>({
  category_id: { type: Schema.Types.ObjectId },
  movement_id: { type: Schema.Types.ObjectId },
  date: { type: Date, default: Date.now },
  detail_set: {
    type: [
      {
        set: { type: Number },
        repetition: { type: Number },
        weight: { type: Number },
        description: { type: String }
      }
    ]
  }
}, { versionKey: false })

export const History = model<IHistory>('histories', historySchema)
