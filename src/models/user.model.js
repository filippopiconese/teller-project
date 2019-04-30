const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const Schema = mongoose.Schema

const { userUri } = require('../../config')

mongoose.connect(userUri, { useNewUrlParser: true })
  .catch((error) => {
    console.error(error + '\nCheck whether service mongod has started correctly - sudo service mongod start')
  })

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

// We want to salt&hash the password before the save action takes place
userSchema.pre('save', async function (next) {
  try {
    // Generate a salt
    const salt = await bcrypt.genSalt(10)
    // Generate a password has (salt + hash)
    const passwordHash = await bcrypt.hash(this.password, salt)
    // Re-assign hashed version over original, plaintext passord
    this.password = passwordHash

    next()
  } catch (error) {
    next(error)
  }
})

// Create a model
const User = mongoose.model('user', userSchema)

// Export the model
module.exports = User
