import mongoose from 'mongoose'

const memberSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  position: {
    type: String,
    required: true,
  },
  insta_id: { type: String, required: true },
  linkedin_id: { type: String, required: true },
  photo: { type: String, required: true },
  designation: { type: String, required: true },
})

const Member =
  mongoose.models.members || mongoose.model('members', memberSchema)

export default Member
