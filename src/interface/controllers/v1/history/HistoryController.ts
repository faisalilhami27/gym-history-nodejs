import { Response, Request } from 'express'
import { HistoryUseCase } from '../../../../application/usecases/v1/backend/history/HistoryUseCase'
import { StatusCode } from '../../../../utils/StatusCode'
import { BaseController } from '../../BaseController'

class HistoryController extends BaseController {
  async getAll (req: Request, res: Response): Promise<Response> {
    const result = await new HistoryUseCase(req).getAll()
    const statusCode = new StatusCode(result)
    return res.status(statusCode.code).json(result)
  }

  async create (req: Request, res: Response): Promise<Response> {
    const result = await new HistoryUseCase(req).create()
    const statusCode = new StatusCode(result)
    return res.status(statusCode.code).json(result)
  }

  async getById (req: Request, res: Response): Promise<Response> {
    const result = await new HistoryUseCase(req).getById()
    const statusCode = new StatusCode(result)
    return res.status(statusCode.code).json(result)
  }

  async update (req: Request, res: Response): Promise<Response> {
    const result = await new HistoryUseCase(req).update()
    const statusCode = new StatusCode(result)
    return res.status(statusCode.code).json(result)
  }
}

export default new HistoryController()
