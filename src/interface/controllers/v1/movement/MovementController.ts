import { Response, Request } from 'express'
import { MovementUseCase } from '../../../../application/usecases/v1/backend/movement/MovementUseCase'
import { StatusCode } from '../../../../utils/StatusCode'
import { BaseController } from '../../BaseController'

class MovementController extends BaseController {
  async getAll (req: Request, res: Response): Promise<Response> {
    const result = await new MovementUseCase(req).getAll()
    const statusCode = new StatusCode(result)
    return res.status(statusCode.code).json(result)
  }

  async create (req: Request, res: Response): Promise<Response> {
    const result = await new MovementUseCase(req).create()
    const statusCode = new StatusCode(result)
    return res.status(statusCode.code).json(result)
  }

  async getById (req: Request, res: Response): Promise<Response> {
    const result = await new MovementUseCase(req).getById()
    const statusCode = new StatusCode(result)
    return res.status(statusCode.code).json(result)
  }

  async update (req: Request, res: Response): Promise<Response> {
    const result = await new MovementUseCase(req).update()
    const statusCode = new StatusCode(result)
    return res.status(statusCode.code).json(result)
  }

  async delete (req: Request, res: Response): Promise<Response> {
    const result = await new MovementUseCase(req).delete()
    const statusCode = new StatusCode(result)
    return res.status(statusCode.code).json(result)
  }
}

export default new MovementController()
