const express = require('express')
const router = express.Router()
const {initGroupEmail} = require('./group.controller')

router.post('/', initGroupEmail);

module.exports = router