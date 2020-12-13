const express = require('express')
const {email} = require('./verify.controller')
const router = express.Router()

// Routes
router.post('/email', email)

module.exports = router