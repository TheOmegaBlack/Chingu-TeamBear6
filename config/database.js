/* eslint no-console: 0 */
const mongoose = require('mongoose')

const dbURI = process.env.DB_URI

mongoose.connect(dbURI)

mongoose.Promise = Promise

const db = mongoose.connection

db.on('connected', () => {
  console.log('MongoDB connection connected to ' + dbURI)
})

db.on('disconnected', () => {
  console.log('MongoDB connection disconnected')
})

db.on('error', (err) => {
  console.error('MongoDB connection error. Please try to start/restart your MongoDB')
  process.exit(1)
})
