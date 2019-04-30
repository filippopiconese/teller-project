const passport = require('passport')
const JwtStrategy = require('passport-jwt').Strategy
const { ExtractJwt } = require('passport-jwt')
const { jwt_secret } = require('../config')
const User = require('./models/user.model')

passport.use(new JwtStrategy({
  jwtFromRequest: ExtractJwt.fromHeader('authorization'),
  secretOrKey: jwt_secret
}, async (payload, done) => {
  try {
    // Find the user specified in token
    const user = await User.findById(payload.sub)

    // if user doesn't exists, handle it
    if (!user) {
      return done(null, false)
    }

    // Otherwise, return the user
    done(null, user)
  } catch (error) {
    done(error, false)
  }
}))
