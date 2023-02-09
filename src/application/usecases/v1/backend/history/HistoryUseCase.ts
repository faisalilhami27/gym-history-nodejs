import { BaseUseCase } from '../../../BaseUseCase'
import { Response } from '../../../../../utils/Response'
import { HistoryRepository, ResponseHistory } from '../../../../repositories/v1/history/HistoryRepository'
import { MESSAGE } from '../../../../../constant/message'

export class HistoryUseCase extends BaseUseCase {
  private req: any
  private gymLogRepository: HistoryRepository

  constructor (req: any) {
    super()
    this.req = req
    this.gymLogRepository = new HistoryRepository()
  }

  async getAll (): Promise<Response> {
    try {
      const result: ResponseHistory[] = await this.gymLogRepository.getAll()
      return this.returnOk(result)
    } catch (error) {
      return this.returnErrOnCatch(error)
    }
  }

  async create (): Promise<Response> {
    try {
      const result: ResponseHistory = await this.gymLogRepository.create(this.req.body)

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
      const result: ResponseHistory | null = await this.gymLogRepository.getById(this.req.params.id)

      if (result == null) {
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
      const data: ResponseHistory | null = await this.gymLogRepository.getById(id)

      if (data == null) {
        return this.returnNotFound()
      }

      const result: ResponseHistory | null = await this.gymLogRepository.update(id, body)

      if (result) {
        return this.returnOk(result)
      }

      return this.returnErrWithCustomMessage(MESSAGE.common.generalErr, result)
    } catch (error) {
      return this.returnErrOnCatch(error)
    }
  }
}
