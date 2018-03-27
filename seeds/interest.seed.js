const Interest = require('../models/interest')

const interests = [
  { name: 'Music' },
  { name: 'Coding' },
  { name: 'Basketball' },
  { name: 'Cooking' },
  { name: 'Technology' },
]

const populate = () => Interest.insertMany(interests)

module.exports = { populate }
