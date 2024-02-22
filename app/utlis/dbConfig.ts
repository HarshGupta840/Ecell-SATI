import mongoose from 'mongoose'

export async function connect() {
  console.log('connecting to the database')
  await mongoose.connect(process.env.Mongo_uri!)
  const connection = await mongoose.connection

  connection.on('connected', () => {
    console.log('MongoDb Connected Successfully!!')
  })

  connection.on('error', (error) => {
    console.log('Some error occured while connecting')
    console.log(error)
  })
}
