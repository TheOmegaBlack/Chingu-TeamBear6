/* eslint-disable no-console */

const mongoose = require('mongoose')

require('dotenv').config()

console.log('Seeding...')
require('../config/database')

const interestSeed = require('./interest.seed')
const usersSeed = require('./users.seed')

// If ever we're gonna need more seed files, just have them expose a
// Promise-compatible function that does the seeding, then plug it here.
Promise.all([interestSeed.populate(), usersSeed.populate()])
  .then(() => console.log('\nDone'))
  .then(() => mongoose.connection.close())
  .catch((err) => {
    console.error('Oops, something went wrong...')
    console.error(err)
    process.exit(1)
  })
