import express, { Application } from 'express'
import path from 'path'
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
import logger from 'morgan'
import compression from 'compression'
import helmet from 'helmet'
import cors from 'cors'
import * as Sentry from '@sentry/node'
import * as Tracing from '@sentry/tracing'
import { config as dotenv } from 'dotenv'
import { connectToDatabase } from '../database/mongo'
import { SENTRY_ENV } from '../../constant/sentry'
import { COMMON_ENV } from '../../constant/common'

// Import routes
import mainRoute from './routes/Main'
import categoryRoute from './routes/v1/category/CategoryRoute'
import movementRoute from './routes/v1/movement/MovementRoute'
import historiesRoute from './routes/v1/history/HistoryRoute'

export class App {
  public app: Application

  constructor () {
    this.app = express()
    this.plugins()
    this.routes()
    this.checkDatabaseConnection()
    dotenv()
  }

  private plugins (): void {
    this.app.use(cors({
      origin: '*',
      methods: ['GET', 'POST', 'DELETE', 'UPDATE', 'PUT', 'PATCH']
    }))
    this.app.use(compression())
    this.app.use(helmet())
    this.app.use(logger('dev'))
    this.app.use(express.json({ limit: '500mb' }))
    this.app.use(bodyParser.json())
    this.app.use(express.urlencoded({ extended: false }))
    this.app.use(cookieParser())
    this.app.use(express.static(path.join(__dirname, 'public')))
  }

  private routes (): void {
    this.app.use('/', mainRoute)
    this.app.use('/api/v1/category', categoryRoute)
    this.app.use('/api/v1/movement', movementRoute)
    this.app.use('/api/v1/history', historiesRoute)
  }

  private logging (): void {
    if (COMMON_ENV.ENV !== 'local') {
      const app: Application = this.app
      Sentry.init({
        dsn: SENTRY_ENV.SENTRY_DSN,
        environment: SENTRY_ENV.SENTRY_ENVIRONMENT,
        integrations: [
          new Sentry.Integrations.Http({ tracing: true }),
          new Tracing.Integrations.Express({ app }),
          new Tracing.Integrations.Mysql(),
          new Tracing.Integrations.Mongo({ useMongoose: true })
        ]
      })
      this.app.use(Sentry.Handlers.requestHandler())
      this.app.use(Sentry.Handlers.tracingHandler())
    }
  }

  private checkDatabaseConnection (): void {
    const mongo = connectToDatabase()
    mongo
      .then(() => {
        console.log('Connect to mongo successfully.')
      })
      .catch(error => {
        console.error('Unable to connect to the database:', error)
        return process.exit(1)
      })
  }
}
