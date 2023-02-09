import { BaseUseCase } from '../../../BaseUseCase'
import { Response } from '../../../../../utils/Response'
import { MovementRepository, ResponseMovement } from '../../../../repositories/v1/movement/MovementRepository'
import { MESSAGE } from '../../../../../constant/message'

export class MovementUseCase extends BaseUseCase {
  private req: any
  private movementRepository: MovementRepository

  constructor (req: any) {
    super()
    this.req = req
    this.movementRepository = new MovementRepository()
  }

  async getAll (): Promise<Response> {
    try {
      const result: ResponseMovement[] = await this.movementRepository.getAll()
      return this.returnOk(result)
    } catch (error) {
      return this.returnErrOnCatch(error)
    }
  }

  async create (): Promise<Response> {
    try {
      const result: ResponseMovement = await this.movementRepository.create(this.req.body)

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
      const result: ResponseMovement | null = await this.movementRepository.getById(this.req.params.id)

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
      const data: ResponseMovement | null = await this.movementRepository.getById(id)

      if (data) {
        return this.returnNotFound()
      }

      const result: ResponseMovement | null = await this.movementRepository.update(id, body)

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
      const data: ResponseMovement | null = await this.movementRepository.getById(id)

      if (data) {
        return this.returnNotFound()
      }

      const result = await this.movementRepository.delete(id)

      if (result) {
        return this.returnOk()
      }

      return this.returnErrWithCustomMessage(MESSAGE.common.generalErr, result)
    } catch (error) {
      return this.returnErrOnCatch(error)
    }
  }
}
