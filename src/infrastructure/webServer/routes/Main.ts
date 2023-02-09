import BaseRoute from '../BaseRoute'
import moment from 'moment-timezone'

class MainRoute extends BaseRoute {
  public routes (): void {
    this.router.get('/', (req, res) => {
      res.send({
        Status: 'OK',
        Message: 'Success',
        Timestamp: new Date(),
        Date: moment().tz('Asia/Jakarta').format('YYYY-MM-DD HH:mm:ss'),
        UnixTimestamp: Math.round((new Date()).getTime() / 1000)
      })
    })
  }
}

export default new MainRoute().router
