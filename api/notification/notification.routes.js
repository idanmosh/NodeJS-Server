const express = require('express')
const router = express.Router()

const {pushNotification} = require('./notification.controller')
//router routes
router.post('/', pushNotification) 

module.exports = router