import { BaseUseCase } from '../../../BaseUseCase'
import { Response } from '../../../../../utils/Response'
import { CategoryRepository, ResponseCategory } from '../../../../repositories/v1/category/CategoryRepository'
import { MESSAGE } from '../../../../../constant/message'

export class CategoryUseCase extends BaseUseCase {
  private req: any
  private categoryRepository: CategoryRepository

  constructor (req: any) {
    super()
    this.req = req
    this.categoryRepository = new CategoryRepository()
  }

  async getAll (): Promise<Response> {
    try {
      const result: ResponseCategory[] = await this.categoryRepository.getAll()
      return this.returnOk(result)
    } catch (error) {
      return this.returnErrOnCatch(error)
    }
  }

  async create (): Promise<Response> {
    try {
      const result: ResponseCategory = await this.categoryRepository.create(this.req.body)

      if (result) {
        return this.returnOk(result)
      }

      return this.returnErrWithCustomMessage(MESSAGE.common.generalErr, result)
    } catch (error) {
      return this.returnErrOnCatch(error)
    }
  }

  async getById (): Promise<Response> {
    try {
      const result: ResponseCategory | null = await this.categoryRepository.getById(this.req.params.id)

      if (!result) {
        return this.returnNotFound()
      }

      return this.returnOk(result)
    } catch (error) {
      return this.returnErrOnCatch(error)
    }
  }

  async update (): Promise<Response> {
    try {
      const body = this.req.body
      const id = this.req.params.id
      const data: ResponseCategory | null = await this.categoryRepository.getById(id)

      if (data) {
        return this.returnNotFound()
      }

      const result: ResponseCategory | null = await this.categoryRepository.update(id, body)

      if (result) {
        return this.returnOk()
      }

      return this.returnErrWithCustomMessage(MESSAGE.common.generalErr, result)
    } catch (error) {
      return this.returnErrOnCatch(error)
    }
  }

  async delete (): Promise<Response> {
    try {
      const id = this.req.params.id
      const data: ResponseCategory | null = await this.categoryRepository.getById(id)

      if (data) {
        return this.returnNotFound()
      }

      const result = await this.categoryRepository.delete(id)

      if (result) {
        return this.returnOk()
      }

      return this.returnErrWithCustomMessage(MESSAGE.common.generalErr, result)
    } catch (error) {
      return this.returnErrOnCatch(error)
    }
  }
}
