import { App } from './src/infrastructure/webServer/Server'
import moment from 'moment-timezone'

require('dotenv').config()

// timezone
const date = new Date()
moment(date.getTime()).tz('Asia/Jakarta').format('YYYY-MM-DD HH:mm:ss')

export const app = new App().app

// running app
const port: number = parseInt(process.env.PORT || '3000')
app.listen(port, () => {
  console.log('Server running on port ' + port)
})
