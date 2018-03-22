const express = require('express')
const interestController = require('../../controllers/interest')

const router = express.Router()

router.route('/')
  .get(interestController.index)
  .post(interestController.create)

router.route('/:id')
  .get(interestController.read)
  .put(interestController.update)
  .delete(interestController.remove)

router.route('/find/:name')
  .get(interestController.find)

module.exports = router
