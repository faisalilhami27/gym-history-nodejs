import BaseRoute from '../../../BaseRoute'
import categoryController from '../../../../../interface/controllers/v1/category/CategoryController'

class CategoryRoute extends BaseRoute {
  public routes (): void {
    this.router.get('/', categoryController.getAll)
    this.router.post('/', categoryController.create)
    this.router.get('/:id', categoryController.getById)
    this.router.patch('/:id', categoryController.update)
    this.router.delete('/:id', categoryController.delete)
  }
}

export default new CategoryRoute().router
