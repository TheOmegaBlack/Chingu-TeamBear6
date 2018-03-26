const Interest = require('../models/interest')

const interests = [
  { name: 'Music' },
  { name: 'Coding' },
  { name: 'Basketball' },
  { name: 'Cooking' },
  { name: 'LGBT' },
  { name: 'Technology' },
]

// clear interest collection before instert to avoid duplicate
const populate = () => Interest.remove({})
  .then(() => Interest.insertMany(interests))

module.exports = { populate }
