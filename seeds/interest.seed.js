const Interest = require('../models/interest')

const interests = [
  { name: 'Music' },
  { name: 'Coding' },
  { name: 'Basketball' },
  { name: 'Cooking' },
  { name: 'LGBT' },
]

const populate = () => Interest.insertMany(interests)

module.exports = { populate }
