import { BaseRepository } from '../../BaseRepository'
import { History, IHistory } from '../../../../domain/models/History'
import { RootQuerySelector } from 'mongoose'

export type ResponseHistory = IHistory
export class HistoryRepository extends BaseRepository {
  async getAll (): Promise<ResponseHistory[]> {
    try {
      return await History.find().exec()
    } catch (error: any) {
      this.logError(error)
      return error
    }
  }

  async getById (id: RootQuerySelector<IHistory>): Promise<ResponseHistory | null> {
    try {
      return await History.findById(id).exec()
    } catch (error: any) {
      this.logError(error)
      return error
    }
  }

  async create (body: IHistory): Promise<ResponseHistory> {
    try {
      return await History.create(body)
    } catch (error: any) {
      this.logError(error)
      return error
    }
  }

  async update (id: RootQuerySelector<IHistory>, body: IHistory): Promise<ResponseHistory | null> {
    try {
      return await History.findOneAndUpdate(id, body)
    } catch (error: any) {
      this.logError(error)
      return error
    }
  }
}
