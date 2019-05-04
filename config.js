const dotenv = require('dotenv')
dotenv.config()

module.exports = {
  localUri: process.env.MONGO_LOCAL_URI,
  atlasUri: process.env.MONGO_ATLAS_URI,
  userUri: process.env.MONGO_USER_URI,
  testUri: process.env.MONGO_TEST_URI,
  port: process.env.PORT || 3000,
  jwt_secret: process.env.JWT_SECRET
}
