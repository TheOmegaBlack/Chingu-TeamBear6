const Interest = require('../models/interest')

function index(req, res, next) {
  Interest.find({})
    .exec()
    .then((interest) => res.json(interest))
    .catch((err) => next(err))
}

function create(req, res, next) {
  const { name } = req.body

  Interest.create({ name })
    .then((interest) => res.json(interest))
    .catch((err) => next(err))
}

function read(req, res, next) {
  const { id } = req.params

  Interest.findById(id)
    .exec()
    .then((interest) => res.json(interest))
    .catch((err) => res.sendStatus(400))
}

function update(req, res, next) {
  const { id } = req.params
  const { name } = req.body

  Interest.findByIdAndUpdate(id, { name }, { new: true })
    .exec()
    .then((interest) => res.json(interest))
    .catch((err) => res.sendStatus(400))
}

function find(req, res, next) {
  const regex = new RegExp(`${req.params.name}`, 'i')

  Interest.find({ name: regex })
    .exec()
    .then((interest) => res.json(interest))
    .catch((err) => res.sendStatus(400))
}

module.exports = {
  index,
  create,
  read,
  update,
  find,
}
