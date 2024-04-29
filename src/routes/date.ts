import { Router } from 'express'
import DateController from '../controllers/date.controller'

const router = Router()

router.post('/', DateController.insertOne)

router.get('/all', DateController.getAll)

router.get('/id/:id', DateController.getById)

router.get('/month/:month', DateController.getByMonth)

export { router }
