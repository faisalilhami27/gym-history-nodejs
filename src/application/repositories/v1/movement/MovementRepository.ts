import { BaseRepository } from '../../BaseRepository'
import { Movement, IMovement } from '../../../../domain/models/Movement'
import { RootQuerySelector } from 'mongoose'

export type ResponseMovement = IMovement
export class MovementRepository extends BaseRepository {
  async getAll (): Promise<ResponseMovement[]> {
    try {
      return await Movement.find().exec()
    } catch (error: any) {
      this.logError(error)
      return error
    }
  }

  async getById (id: RootQuerySelector<IMovement>): Promise<ResponseMovement | null> {
    try {
      return await Movement.findById(id).exec()
    } catch (error: any) {
      this.logError(error)
      return error
    }
  }

  async create (body: IMovement): Promise<ResponseMovement> {
    try {
      return await Movement.create(body)
    } catch (error: any) {
      this.logError(error)
      return error
    }
  }

  async update (id: RootQuerySelector<IMovement>, body: IMovement): Promise<ResponseMovement | null> {
    try {
      return await Movement.findOneAndUpdate(id, body)
    } catch (error: any) {
      this.logError(error)
      return error
    }
  }

  async delete (id: RootQuerySelector<IMovement>): Promise<boolean> {
    try {
      const result = await Movement.findOneAndDelete(id)
      return result !== null
    } catch (error: any) {
      this.logError(error)
      return error
    }
  }
}
