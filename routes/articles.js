import express from 'express'
import auth from '../middleware/auth.js'
import upload from '../middleware/upload.js'

import {
  newArticle,
  getArticle,
  editArticle,
  getAllArticle,
  getArticleById
} from '../controllers/articles.js'

const router = express.Router()

router.post('/', auth, upload, newArticle)
router.get('/', getArticle)
router.get('/all', auth, getAllArticle)
router.get('/:id', getArticleById)
router.patch('/:id', auth, upload, editArticle)

export default router
