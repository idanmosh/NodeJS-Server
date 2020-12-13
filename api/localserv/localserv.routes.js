const express = require('express')
const router = express.Router()

const {addLocalServ, getLocalServ, getGroupId} = require("./localserv.controller")

router.get('/groupId', getGroupId)
router.get('/', getLocalServ)
router.post('/', addLocalServ)

module.exports = router