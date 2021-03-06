const status = require('http-status')
const Joi = require('joi')

module.exports = {
  validateBody: (schema) => {
    return (req, res, next) => {
      const result = Joi.validate(req.body, schema)

      if (result.error) {
        console.info(status[400])
        return res.status(400).json(result.error)
      }

      if (!req.value) {
        req.value = {}
      }

      req.value['body'] = result.value

      next()
    }
  },
  schemas: {
    authSchema: Joi.object().keys({
      email: Joi.string().email().required(),
      password: Joi.string().required().regex(/^[a-zA-Z0-9]{3,30}$/)
    })
  }
}
