import { Response, Request } from 'express'
import { CategoryUseCase } from '../../../../application/usecases/v1/backend/category/CategoryUseCase'
import { StatusCode } from '../../../../utils/StatusCode'
import { BaseController } from '../../BaseController'

class CategoryController extends BaseController {
  async getAll (req: Request, res: Response): Promise<Response> {
    const result = await new CategoryUseCase(req).getAll()
    const statusCode = new StatusCode(result)
    return res.status(statusCode.code).json(result)
  }

  async create (req: Request, res: Response): Promise<Response> {
    const result = await new CategoryUseCase(req).create()
    const statusCode = new StatusCode(result)
    return res.status(statusCode.code).json(result)
  }

  async getById (req: Request, res: Response): Promise<Response> {
    const result = await new CategoryUseCase(req).getById()
    const statusCode = new StatusCode(result)
    return res.status(statusCode.code).json(result)
  }

  async update (req: Request, res: Response): Promise<Response> {
    const result = await new CategoryUseCase(req).update()
    const statusCode = new StatusCode(result)
    return res.status(statusCode.code).json(result)
  }

  async delete (req: Request, res: Response): Promise<Response> {
    const result = await new CategoryUseCase(req).delete()
    const statusCode = new StatusCode(result)
    return res.status(statusCode.code).json(result)
  }
}

export default new CategoryController()
