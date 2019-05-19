const dotenv = require('dotenv')
dotenv.config()

if (process.env.NODE_ENV === 'test') {
  module.exports = {
    testUri: process.env.MONGO_TEST_URI,
    jwt_secret: 'tellerAppAuthentication',
    oauth: {
      google: {
        clientID: 'number',
        clientSecret: 'string'
      },
      facebook: {
        clientID: 'number',
        clientSecret: 'string'
      }
    }
  }
} else {
  module.exports = {
    atlasUri: process.env.MONGO_ATLAS_URI,
    userUri: process.env.MONGO_USER_URI,
    port: process.env.PORT || 5000,
    jwt_secret: process.env.JWT_SECRET,
    oauth: {
      google: {
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET
      },
      facebook: {
        clientID: process.env.FB_CLIENT_ID,
        clientSecret: process.env.FB_CLIENT_SECRET
      }
    }
  }
}
