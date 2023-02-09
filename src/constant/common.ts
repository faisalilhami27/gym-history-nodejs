require('dotenv').config()

export interface ICommon {
  PORT: string,
  NODE_ENV: string,
  JWT_SECRET: string,
  API_VERSION: string,
  ENV: string,
  PRIVATE_SIGNATURE_KEY: string
}

const getENV = (key: string): string => {
  const value = process.env[key]
  if (!value) {
    throw new Error(`missing env variable: ${key}`)
  }
  return value
}

const initializeENV = (): ICommon => {
  return {
    PORT: getENV('PORT'),
    NODE_ENV: getENV('NODE_ENV'),
    JWT_SECRET: getENV('JWT_SECRET'),
    API_VERSION: getENV('API_VERSION'),
    ENV: getENV('ENV'),
    PRIVATE_SIGNATURE_KEY: getENV('PRIVATE_SIGNATURE_KEY')
  }
}

export const COMMON_ENV = initializeENV()
