import { Request, Response } from 'express'
import { DateInterface } from '../interface/date.interface'
import DateModel from '../models/date.model'

export default class DateController {
  static insertOne = async (req: Request, res: Response) => {
    const data: DateInterface = req.body
    const response = await DateModel.insertOne(data)
    res.send(response)
  }

  static getAll = async (req: Request, res: Response) => {
    const data = await DateModel.getAll()
    res.send(data)
  }

  static getById = async (req: Request, res: Response) => {
    const { id } = req.params
    const idDate = parseInt(id)
    const response = await DateModel.getById(idDate)
    if (!response) {
      res.send({ "error": "no dates for this id_date"})
      return
    }
    res.send(response)
  }

  static getByMonth = async (req: Request, res: Response) => {
    const { month } = req.params
    const response = await DateModel.getByMonth(month)
    res.send(response)
  }
}