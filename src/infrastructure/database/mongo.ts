import mongoose, { connect, Mongoose } from 'mongoose'

require('dotenv').config()

interface IConfig {
  MONGO_HOST: string,
  MONGO_USERNAME: string,
  MONGO_PASSWORD: string,
  MONGO_PORT: string,
  MONGO_NAME: string,
  ENV: string
}

const getENV = (key: keyof IConfig) => {
  const value = process.env[key]

  if (!value) {
    throw new Error(`missing env variable: ${key}`)
  }
  return value
}

export const connectToDatabase = async (): Promise<Mongoose> => {
  let connection: Mongoose
  mongoose.set('strictQuery', false)
  if (getENV('ENV') === 'local') {
    connection = await connect(`mongodb://${getENV('MONGO_HOST')}:${getENV('MONGO_PORT')}`, {
      dbName: getENV('MONGO_NAME'),
      user: getENV('MONGO_USERNAME'),
      pass: getENV('MONGO_PASSWORD')
    })
  } else {
    const url = `mongodb+srv://${getENV('MONGO_USERNAME')}:${getENV('MONGO_PASSWORD')}@${getENV('MONGO_HOST')}/${getENV('MONGO_NAME')}`
    connection = await connect(`${url}?retryWrites=true&w=majority`)
  }

  return connection
}
