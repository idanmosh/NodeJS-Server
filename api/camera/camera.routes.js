const express = require('express')
const {addCamera, getByGroupId, delCamera, updateCamera} = require('./camera.controller')
const {validateToken} = require('../../middlewares/validateToken')
const router = express.Router()

router.get('/get-by-id/:id',  getByGroupId)
router.post('/add-camera', addCamera)
router.put('/update-camera', updateCamera)
router.delete('/:id', delCamera)

module.exports = router