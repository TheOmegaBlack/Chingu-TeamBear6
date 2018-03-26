const express = require('express')
const apiRoute = require('./api')
const cors = require('cors')

const router = express.Router()

const corsOptions = {
  origin: [
    /http:\/\/localhost:\d+/,
    /https?:\/\/(dev-)?weareyourteam.herokuapp.com/,
  ],
}

router.use('/api', cors(corsOptions), apiRoute)

module.exports = router
