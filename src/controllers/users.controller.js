module.exports = {
  signUp: async (req, res, next) => {
    // Email & Password
    console.log('Contents of req.value.body', req.value.body)
    console.log('UsersModule.signUp() called!')
  },
  signIn: async (req, res, next) => {
    // Generate token
    console.log('UsersModule.signIn() called!')
  },
  secret: async (req, res, next) => {
    console.log('UsersModule.secret() called!')
  }
}
