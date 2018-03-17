const express = require('express')
const userController = require('../../controllers/users')

const router = express.Router()

router.route('/')
  .get(userController.index)
  .post(userController.create)

router.route('/profile')
  .get(userController.getProfile)
  .put(userController.setProfile)

router.route('/:id')
  .get(userController.read)
  .put(userController.update)

module.exports = router
