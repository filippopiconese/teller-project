const CustomerModel = require('../models/customer.model')
const express = require('express')
const status = require('http-status')
const router = express.Router()

// CREATE
router.post('/customer', (req, res) => {
  if (!req.body) {
    console.info(status[400])

    return res.status(400).send('Request body is missing')
  }

  const model = new CustomerModel(req.body)
  model.save()
    .then(doc => {
      if (!doc || doc.length === 0) {
        console.info(status[500])

        return res.status(500).send(doc)
      }

      res.status(201).send(doc)
    })
    .catch(err => {
      console.info(status[500])

      return res.status(500).json(err)
    })
})

// READ
router.get('/customer', (req, res) => {
  if (!req.query.email) {
    console.info(status[500])

    return res.status(400).send('Missing URL prameter: email')
  }

  CustomerModel.findOne({
      email: req.query.email
    })
    .then(doc => {
      res.json(doc)
    })
    .catch(err => {
      console.info(status[500])

      res.status(500).json(err)
    })
})

// UPDATE
router.put('/customer', (req, res) => {
  if (!req.query.email) {
    console.info(status[400])

    return res.status(400).send('Missing URL prameter: email')
  }

  CustomerModel.findOneAndUpdate({
      email: req.query.email
    }, req.body, {
      new: true
    })
    .then(doc => {
      res.json(doc)
    })
    .catch(err => {
      console.info(status[500])

      res.status(500).json(err)
    })
})

// DELETE
router.delete('/customer', (req, res) => {
  if (!req.query.email) {
    console.info(status[400])

    return res.status(400).send('Missing URL prameter: email')
  }

  CustomerModel.findOneAndRemove({
      email: req.query.email
    })
    .then(doc => {
      res.json(doc)
    })
    .catch(err => {
      console.info(status[500])

      res.status(500).json(err)
    })
})

module.exports = router
