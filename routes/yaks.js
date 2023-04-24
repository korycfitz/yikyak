import { Router } from 'express'
import * as yaksCtrl from '../controllers/yaks.js'

const router = Router()

// GET localhost:3000/yaks
router.get('/', yaksCtrl.index)
// GET /yaks/new
router.get('/new', yaksCtrl.new)
// POST /yaks
router.post('/', yaksCtrl.create)

export {
	router
}