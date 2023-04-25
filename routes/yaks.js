import { Router } from 'express'
import * as yaksCtrl from '../controllers/yaks.js'
import { isLoggedIn } from '../middleware/middleware.js'

const router = Router()

// GET localhost:3000/yaks
router.get('/', yaksCtrl.index)
// GET /yaks/new
router.get('/new', yaksCtrl.new)
// POST /yaks
router.post('/', isLoggedIn, yaksCtrl.create)
router.post('/:yakId/comments', isLoggedIn,yaksCtrl.createComment)
router.get('/:yakId', yaksCtrl.show)
// localhost:3000/yaks/:yakId
router.delete("/:yakId", isLoggedIn, yaksCtrl.delete)
// localhost:3000/yaks/:yakId/edit
router.get("/:yakId/edit", isLoggedIn,yaksCtrl.edit)
// localhost:3000/yaks/:yakId
router.put("/:yakId", isLoggedIn, yaksCtrl.update)

export {
	router
}