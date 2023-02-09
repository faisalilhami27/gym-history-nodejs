import { Response } from '../../utils/Response'
import { MESSAGE } from '../../constant/message'
import { COMMON_ENV } from '../../constant/common'
import * as Sentry from '@sentry/node'

export class BaseUseCase {
  public returnErrWithCustomMessage (message: string, err?: any | null) {
    this.logging(message, null, err)
    return new Response(false, message, null, err, null)
  }

  public returnNotFound () {
    this.logging(MESSAGE.common.notFound, null, null)
    return new Response(false, MESSAGE.common.notFound, null, null, null)
  }

  public returnNotFoundWithCustomMessage (message: string) {
    this.logging(message, null, null)
    return new Response(false, message, null, null, null)
  }

  public returnOk (data: any = null, token: any = null) {
    return new Response(true, MESSAGE.common.success, data, null, token)
  }

  public returnOkWithCustomMessage (message: string, data: any = null) {
    return new Response(true, message, data, null, null)
  }

  public returnErrOnCatch (err: any) {
    this.logging(MESSAGE.common.generalErr, 'error', err)
    return new Response(false, MESSAGE.common.generalErr, null, err, null)
  }

  private logging (message: string, type: string | null, error: Error | null) : void {
    if (COMMON_ENV.ENV !== 'local') {
      if (type === 'error') {
        Sentry.captureException(error)
      } else {
        Sentry.captureMessage(message, {
          level: 'warning'
        })
      }
    }
  }
}
