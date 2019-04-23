const status = require('http-status')
const User = require('../models/user.model')

module.exports = {
  signUp: async (req, res, next) => {
    const { email, password } = req.value.body

    // Check if there is a user with the same email
    const foundUser = await User.findOne({ email })
    if (foundUser) {
      console.info(status[403])
      return res.status(403).json({ error: 'Email is already in use' })
    }

    // Create a new user
    const newUser = new User({ email, password })

    await newUser.save()

    // Respond with token - TBD
    res.json({ user: 'created' })
  },
  signIn: async (req, res, next) => {
    // Generate token
    console.log('UserController.signIn() called!')
  },
  secret: async (req, res, next) => {
    console.log('UserController.secret() called!')
  }
}
