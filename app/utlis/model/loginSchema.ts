import mongoose from 'mongoose'

const adminSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
})

const AdminUser =
  mongoose.models.adminUsers || mongoose.model('adminUsers', adminSchema)

export default AdminUser
