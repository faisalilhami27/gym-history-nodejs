import BaseRoute from '../../../BaseRoute'
import movementController from '../../../../../interface/controllers/v1/movement/MovementController'

class MovementRoute extends BaseRoute {
  public routes (): void {
    this.router.get('/', movementController.getAll)
    this.router.post('/', movementController.create)
    this.router.get('/:id', movementController.getById)
    this.router.patch('/:id', movementController.update)
    this.router.delete('/:id', movementController.delete)
  }
}

export default new MovementRoute().router
