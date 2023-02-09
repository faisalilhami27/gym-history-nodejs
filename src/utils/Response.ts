export class Response {
  public status: any
  public message: string | null
  public data: any
  public token: string | null | undefined
  public error: any

  constructor (success: any | null, message: string | null, data: any, error: any, token: string | null) {
    this.status = (success === true) ? 'success' : 'failed'
    this.message = message
    this.data = data
    if (token != null) this.token = token
    this.error = error
    if (error instanceof Error) {
      this.error = {
        message: error.message ?? '',
        name: error.name ?? '',
        stack: error.stack ?? ''
      }
    }
  }
}
