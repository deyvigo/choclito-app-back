import { db } from '../utils/connection'
import { RunResult } from 'sqlite3'
import { UserDateInsert } from '../interface/user-date.interface'

export default class UserDateModel {
  static insertOne = ({idDate, idUser }: UserDateInsert) => {
    return new Promise<RunResult>((resolve, reject) => {
      db.run(
        'INSERT INTO user_date  (id_user, id_date) VALUES (?,?);',
        [idUser, idDate],
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
}