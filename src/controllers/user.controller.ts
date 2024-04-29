import { Request, Response } from 'express'
import { encryptPass } from '../utils/bcrypt'
import UserModel from '../models/user.model'
import { User } from '../interface/user.interface'

export default class UserController {
  static insertOne = async (req: Request, res: Response) => {
    const { username, password, name, birthDay, lastName, rol }: User = req.body
    const encryptedPass = await encryptPass(password)
    const response = await UserModel.insertOne({ username, password: encryptedPass, name, birthDay, lastName, rol })
    res.send(response)
  }

  // static searchbyUsername = async (req: Request, res: Response) => {
  //   const { username } = req.params
  //   const response = await UserModel.getByUsername({ username })
  //   if (!response) {
  //     res.send({ "error": "user not found" })
  //     return
  //   }
  //   res.send(response)
  // }

  static getAllStatsByUsername = async (req: Request, res: Response) => {
    const { username } = req.params
    const response = await UserModel.getAllStatsByUsername({ username })
    if (!response) {
      res.send({ "error": "user not found" })
      return
    }
    res.send(response)
  }

  static getAll = async (req: Request, res: Response) => {
    const response = await UserModel.getAll()
    if (!response) {
      res.send({ "error": "users nit found" })
      return
    }
    res.send(response)
  }
}