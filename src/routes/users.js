const express = require('express')
const router = require('express-promise-router')()

const {
  validateBody,
  schemas
} = require('../helpers/routeHelpers')
const UsersModel = require('../controllers/users.controller')

router.route('/signup')
  .post(validateBody(schemas.authSchema), UsersModel.signUp)

router.route('/signin')
  .post(UsersModel.signIn)

router.route('/secret')
  .get(UsersModel.secret)

module.exports = router
