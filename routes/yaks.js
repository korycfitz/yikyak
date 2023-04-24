import { Router } from 'express'
import * as yaksCtrl from '../controllers/yaks.js'

const router = Router()


// GET /movies/new
router.get('/new', yaksCtrl.new)

export {
	router
}