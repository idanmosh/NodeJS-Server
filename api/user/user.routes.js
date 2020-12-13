const express = require('express')
const {getUsers, getByEmail, updateUserPassword, changeUserPassword, updateUser} = require('./user.controller')
const router = express.Router()

router.get('/', getUsers)
router.put('/', updateUser)
router.get('/:id', getByEmail)
router.put('/password', updateUserPassword)
router.put('/changePassword', changeUserPassword)
// router.delete('/:id',  requireAuth, requireAdmin, deleteUser)

module.exports = router