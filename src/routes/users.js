const express = require('express')
const router = require('express-promise-router')()

const UsersModel = require('../models/users.model')

router.route('/signup')
  .post(UsersModel.signUp)

router.route('/signin')
  .post(UsersModel.signIn)

router.route('/secret')
  .get(UsersModel.secret)

module.exports = router
