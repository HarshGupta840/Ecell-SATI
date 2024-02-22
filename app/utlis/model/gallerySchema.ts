import mongoose from 'mongoose'
import { array } from 'zod'
const gallerySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  date: {
    type: Date,
    required: true,
  },
  mainImage: {
    type: String,
    required: true,
  },
  imageurl: {
    type: Array,
    required: true,
  },
})

const Gallery =
  mongoose.models.gallery || mongoose.model('gallery', gallerySchema)

export default Gallery
