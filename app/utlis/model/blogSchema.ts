import mongoose from 'mongoose'

const blogSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  desc: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: new Date(),
  },
  img: String,
})

const Blogs = mongoose.models.blogs || mongoose.model('blogs', blogSchema)

export default Blogs
