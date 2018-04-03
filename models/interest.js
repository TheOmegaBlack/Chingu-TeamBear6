const mongoose = require('mongoose')

const { Schema } = mongoose

const InterestSchema = new Schema({
  name: { type: String, required: true, unique: true },
})

const InterestModel = mongoose.model('Interest', InterestSchema)

module.exports = InterestModel
