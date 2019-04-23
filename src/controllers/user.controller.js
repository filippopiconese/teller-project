const User = require('../models/user.model')

module.exports = {
  signUp: async (req, res, next) => {
    console.log('Contents of req.value.body', req.value.body)
    console.log('UserController.signUp() called!')

    const {
      email,
      password
    } = req.value.body

    const newUser = new User({
      email,
      password
    })

    await newUser.save()

    res.json({
      user: 'created'
    })
  },
  signIn: async (req, res, next) => {
    // Generate token
    console.log('UserController.signIn() called!')
  },
  secret: async (req, res, next) => {
    console.log('UserController.secret() called!')
  }
}
