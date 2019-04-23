const mongoose = require('mongoose')
const Schema = mongoose.Schema

const { userUri } = require('../../config')

mongoose.connect(userUri, { useNewUrlParser: true })
// Create a schema
const userSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true
  },
  password: {
    type: String,
    required: true
  }
})

// Create a model
const User = mongoose.model('user', userSchema)

// Export the model
module.exports = User
