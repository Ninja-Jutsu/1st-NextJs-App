import { MongoClient } from 'mongodb'

export async function connectToDataBase() {
  console.log(process.env.DB_URL)
  const client = await MongoClient.connect(process.env.DB_URL)
  return client
}
