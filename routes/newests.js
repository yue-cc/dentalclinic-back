import express from 'express'
import auth from '../middleware/auth.js'
import upload from '../middleware/upload.js'

import {
  newNewest,
  getNewest,
  editNewest,
  getAllNewest,
  getNewestById
} from '../controllers/newests.js'

const router = express.Router()

router.post('/', auth, upload, newNewest)
router.get('/', getNewest)
router.get('/all', auth, getAllNewest)
router.get('/:id', getNewestById)
router.patch('/:id', auth, upload, editNewest)

export default router
