import express from 'express'
import auth from '../middleware/auth.js'
import {
  register,
  login,
  logout,
  addReserve,
  getorders,
  getallorders,
  extend,
  getuserinfo
} from '../controllers/users.js'

const router = express.Router()

router.post('/', register)
router.get('/', auth, getuserinfo)
router.post('/login', login)
router.delete('/logout', auth, logout)
router.post('/reserve', auth, addReserve)
router.get('/orders', auth, getorders)
router.get('/orders/all', auth, getallorders)
router.post('/extend', auth, extend)

export default router
