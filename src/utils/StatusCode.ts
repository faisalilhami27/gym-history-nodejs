import { MESSAGE } from '../constant/message'

export class StatusCode {
  public code: number = 200

  constructor (params: any) {
    // Defined by success - string
    if (params.message === MESSAGE.common.success) this.code = 200 // 200 - OK
    if ((params.message === MESSAGE.common.failed) ||
      (params.message === MESSAGE.common.generalErr) ||
      (params.message === MESSAGE.common.badRequest) ||
      (params.status === 'failed')) this.code = 400 // 400 - Bad Request

    // Defined by message - string
    if (params.message === MESSAGE.common.notFound) this.code = 200 // 204 - No Content
    if (params.message === MESSAGE.auth.unAuthorize) this.code = 401 // 401 - Unauthorized
    if (params.message === MESSAGE.auth.invalidAPIKey) this.code = 403 // 403 - Forbidden
  }
}
