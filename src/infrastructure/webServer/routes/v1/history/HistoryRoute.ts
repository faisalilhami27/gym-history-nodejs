import BaseRoute from '../../../BaseRoute'
import gymLogController from '../../../../../interface/controllers/v1/history/HistoryController'

class HistoryRoute extends BaseRoute {
  public routes (): void {
    this.router.get('/', gymLogController.getAll)
    this.router.post('/', gymLogController.create)
    this.router.get('/:id', gymLogController.getById)
    this.router.patch('/:id', gymLogController.update)
  }
}

export default new HistoryRoute().router
