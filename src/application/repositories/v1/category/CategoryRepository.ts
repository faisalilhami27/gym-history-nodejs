import { BaseRepository } from '../../BaseRepository'
import { Category, ICategory } from '../../../../domain/models/Category'
import { RootQuerySelector } from 'mongoose'

export type ResponseCategory = ICategory
export class CategoryRepository extends BaseRepository {
  async getAll (): Promise<ResponseCategory[]> {
    try {
      return await Category.find().exec()
    } catch (error: any) {
      this.logError(error)
      return error
    }
  }

  async getById (id: RootQuerySelector<ICategory>): Promise<ResponseCategory | null> {
    try {
      return await Category.findById(id).exec()
    } catch (error: any) {
      this.logError(error)
      return error
    }
  }

  async create (body: ICategory): Promise<ResponseCategory> {
    try {
      return await Category.create(body)
    } catch (error: any) {
      this.logError(error)
      return error
    }
  }

  async update (id: RootQuerySelector<ICategory>, body: ICategory): Promise<ResponseCategory | null> {
    try {
      return await Category.findOneAndUpdate(id, body)
    } catch (error: any) {
      this.logError(error)
      return error
    }
  }

  async delete (id: RootQuerySelector<ICategory>): Promise<boolean> {
    try {
      const result = await Category.findOneAndDelete(id)
      return result !== null
    } catch (error: any) {
      this.logError(error)
      return error
    }
  }
}
