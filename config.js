const dotenv = require('dotenv')
dotenv.config()

module.exports = {
  localUri: process.env.MONGO_LOCAL_URI,
  atlasUri: process.env.MONGO_ATLAS_URI,
  port: process.env.PORT || 3000
}
