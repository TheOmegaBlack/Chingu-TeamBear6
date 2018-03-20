const express = require('express')
const apiRoute = require('./api')

const router = express.Router()

router.use((req, res, next) => {
  const allowedOrigins = ['http://localhost:8080', 'http://localhost:3000', 'http://weareyourteam.herokuapp.com', 'http://dev-weareyourteam.herokuapp.com']
  const { origin } = req.headers
  if (allowedOrigins.indexOf(origin) > -1) {
    res.header('Access-Control-Allow-Origin', origin)
  }
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
  next()
})

router.use('/api', apiRoute)

module.exports = router
