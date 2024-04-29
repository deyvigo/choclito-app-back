import { Router } from 'express'
import UserController from '../controllers/user.controller'

const router = Router()

router.get('/:username', UserController.getAllStatsByUsername)

router.get('/users/all', UserController.getAll)

export { router }
