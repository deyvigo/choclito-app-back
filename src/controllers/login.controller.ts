import { Request, Response } from 'express'
import { LoginUser } from '../interface/user.interface'
import UserModel from '../models/user.model'
import { comparePass } from '../utils/bcrypt'
import { createJwt } from '../utils/handleJwt'

export default class LoginController {
  static login = async (req: Request, res: Response) => {
    const { username, password }: LoginUser = req.body
    const user = await UserModel.getByUsername({ username })
    if (!user) {
      res.send({ "error": "user not found" })
      return
    }
    const encPass = user.password
    const checkPass = await comparePass(password, encPass)
    if (checkPass) {
      const { rol, lastName, name } = user
      const jwt = createJwt({ username, rol})
      res.send({username, rol, name, lastName, token: jwt})
    } else {
      res.send({ "error": "invalid password" })
    }
  }
}
