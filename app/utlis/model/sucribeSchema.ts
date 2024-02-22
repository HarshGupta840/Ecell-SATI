import mongoose from 'mongoose'
const suscribeSchema = new mongoose.Schema({
  email: {
    type: String,
    unique: true,
    required: true,
  },
})

const Schema =
  mongoose.models.suscribes || mongoose.model('suscribes', suscribeSchema)

export default Schema
