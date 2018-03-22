/* eslint-disable no-console */

const mongoose = require('mongoose')

require('dotenv').config()

console.log('Seeding...')
require('../config/database')

const interestSeed = require('./interest.seed')

// If ever we're gonna need more seed files, just have them expose a
// Promise-compatible function that does the seeding, then plug it here.
Promise.all([interestSeed.populate()])
  .then(() => console.log('\nDone'))
  .then(() => mongoose.connection.close())
