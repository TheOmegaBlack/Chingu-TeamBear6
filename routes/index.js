const express = require('express')
const apiRoute = require('./api')
const cors = require('cors')

const router = express.Router()

const allowedOrigins = ['http://localhost:8080', 'http://localhost:3000', 'http://weareyourteam.herokuapp.com', 'http://dev-weareyourteam.herokuapp.com']
const corsOptions = {
  origin: (origin, callback) => {
    if (allowedOrigins.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback('Not allowed by CORS', false)
    }
  },
}

router.use('/api', cors(corsOptions), apiRoute)

module.exports = router
