import { Router } from 'express'

abstract class BaseRoute {
  public router: Router

  constructor () {
    this.router = Router()
    this.routes()
  }

  abstract routes(): void;
}

export default BaseRoute
