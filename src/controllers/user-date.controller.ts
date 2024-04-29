import { Request, Response } from 'express'
import { UserDate, UserDateInsert } from '../interface/user-date.interface'
import UserDateModel from '../models/user-date.model'

export default class UserDateController {
  static insertOne = async (req: Request, res: Response) => {
    const { idUser, idDate }: UserDateInsert = req.body
    const response = await UserDateModel.insertOne({ idUser, idDate })
    res.send(response)
  }
}