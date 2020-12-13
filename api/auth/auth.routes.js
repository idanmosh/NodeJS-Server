const express = require('express')
const {signup, login, logout} = require('./auth.controller')

const router = express.Router()

// Routes
router.post('/login', login)
router.post('/signup', signup)
router.post('/logout', logout)

module.exports = router