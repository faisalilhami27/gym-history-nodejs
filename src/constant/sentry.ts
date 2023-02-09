require('dotenv').config()

export interface ISentry {
  SENTRY_DSN: string,
  SENTRY_ENVIRONMENT: string,
}

const getENV = (key: string): string => {
  const value = process.env[key]
  if (!value) {
    throw new Error(`missing env variable: ${key}`)
  }
  return value
}

const initializeENV = (): ISentry => {
  return {
    SENTRY_DSN: getENV('SENTRY_DSN'),
    SENTRY_ENVIRONMENT: getENV('SENTRY_ENVIRONMENT')
  }
}

export const SENTRY_ENV = initializeENV()
