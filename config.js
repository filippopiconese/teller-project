const dotenv = require('dotenv')
dotenv.config()

module.exports = {
  atlasUri: process.env.MONGO_ATLAS_URI,
  userUri: process.env.MONGO_USER_URI,
  testUri: process.env.MONGO_TEST_URI,
  port: process.env.PORT || 3000,
  jwt_secret: process.env.JWT_SECRET,
  clientID: process.env.CLIENT_ID,
  clientSecret: process.env.CLIENT_SECRET
}
