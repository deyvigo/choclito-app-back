import { GetUser, User } from './../interface/user.interface'
import { db } from './../utils/connection'
import { RunResult } from 'sqlite3'

export default class UserModel {
  static insertOne = async (data: User) => {
    const { username, password, name, birthDay, lastName, rol }: User = data
    
    return new Promise<RunResult>((resolve, reject) => {
      db.run(
        'INSERT INTO user (username, password, name, last_name, birth_day, id_rol) VALUES (?,?,?,?,?,?);',
        [username, password, name, lastName, birthDay, rol],
        function (err) {
          if (err) {
            reject(err)
          } else {
            resolve(this)
          }
        }
      )
    })
  }

  static getByUsername = async ({ username }: { username: string}) => {
    return new Promise<GetUser>((resolve, reject) => {
      db.get(
        'SELECT username, u.name as name, password, last_name, birth_day, r.name as rol FROM user AS u INNER JOIN rol AS r ON u.id_rol = r.id_rol WHERE username = ?;',
        [username],
        function (err, row: GetUser) {
          if (err) {
            reject(err)
          } else {
            resolve(row)
          }
        }
      )
    })
  }

  static getAllStatsByUsername = async ({ username }: { username: string}) => {
    return new Promise<GetUser>((resolve, reject) => {
      db.get(
        'SELECT username, u.name as name, last_name, birth_day, r.name as rol FROM user AS u INNER JOIN rol AS r ON u.id_rol = r.id_rol WHERE username = ?;',
        [username],
        function (err, row: GetUser) {
          if (err) {
            reject(err)
          } else {
            resolve(row)
          }
        }
      )
    })
  }
}