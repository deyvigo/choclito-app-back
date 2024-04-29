import { RunResult } from 'sqlite3'
import { DateInterface } from '../interface/date.interface'
import { db } from '../utils/connection'

export default class DateModel {
  static insertOne = async (data: DateInterface) => {
    const { day, description, hour, title } = data
    return new Promise<RunResult>((resolve, reject) => {
      db.run(
        'INSERT INTO date (title, description, day, hour) VALUES (?,?,?,?);',
        [title, description, day, hour],
        function(err) {
          if (err) {
            reject(err)
          } else {
            resolve(this)
          }
        }
      )
    })
  }

  static getAll = async () => {
    return new Promise<[DateInterface]>((resolve, reject) => {
      db.all(
        'SELECT * FROM date;',
        [],
        function (err: Error, rows: [DateInterface]) {
          if (err) {
            reject(err)
          } else {
            resolve(rows)
          }
        }
      )
    })
  }

  static getById = async (id: number) => {
    return new Promise<DateInterface>((resolve, reject) => {
      db.get(
        'SELECT * FROM date WHERE id_date = ?;',
        [id],
        function (err, row: DateInterface) {
          if (err) {
            reject(err)
          } else {
            resolve(row)
          }
        }
      )
    })
  }

  static getByMonth = async (month: string) => {
    return new Promise<[DateInterface]>((resolve, reject) => {
      db.all(
        'SELECT * FROM date WHERE strftime("%m", day) = ?;',
        [month],
        function (err: Error, row: [DateInterface]) {
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