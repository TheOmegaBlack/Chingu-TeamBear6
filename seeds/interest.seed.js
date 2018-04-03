const Interest = require('../models/interest')

const interests = [
  { _id: '5ac392007e35f10bf022273d', name: 'Music' },
  { _id: '5ac392007e35f10bf022273e', name: 'Coding' },
  { _id: '5ac392007e35f10bf022273f', name: 'Basketball' },
  { _id: '5ac392007e35f10bf0222740', name: 'Cooking' },
  { _id: '5ac392007e35f10bf0222741', name: 'Technology' },
]

// clear interests collection before insert to avoid duplicate
const populate = () => Interest.remove({})
  .then(() => Interest.insertMany(interests))

module.exports = { populate }
