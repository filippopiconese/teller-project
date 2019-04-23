module.exports = {
  signUp: async (req, res, next) => {
    console.log('UsersModule.signUp() called!')
  },
  signIn: async (req, res, next) => {
    console.log('UsersModule.signIn() called!')
  },
  secret: async (req, res, next) => {
    console.log('UsersModule.secret() called!')
  }
}
