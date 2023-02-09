import { COMMON_ENV } from '../../constant/common'
import * as Sentry from '@sentry/node'

export class BaseRepository {
  public logError (error: Error | unknown): void {
    if (COMMON_ENV.ENV !== 'local') {
      Sentry.captureException(error)
    } else {
      console.log(error)
    }
  }
}
