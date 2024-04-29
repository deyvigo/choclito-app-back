import { Router } from 'express'
import UserDateController from '../controllers/user-date.controller'

const router = Router()

router.post('/', UserDateController.insertOne)

export { router }