const dotenv = require('dotenv')
dotenv.config()

module.exports = {
  atlasUri: process.env.MONGO_ATLAS_URI,
  userUri: process.env.MONGO_USER_URI,
  testUri: process.env.MONGO_TEST_URI,
  port: process.env.PORT || 3000,
  jwt_secret: process.env.JWT_SECRET,
  googleClientID: process.env.GOOGLE_CLIENT_ID,
  googleClientSecret: process.env.GOOGLE_CLIENT_SECRET
}
