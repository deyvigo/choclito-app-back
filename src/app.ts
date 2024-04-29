import express from 'express'
import cors from 'cors'
import { router } from './routes/index'

const app = express()

app.use(cors())
app.use(express.json())
app.use('/', router)

// app.get('/', (req: Request, res: Response) => {
//   res.send({"saludo": "Hola Mundo"})
// })

// app.post('/user', (req: Request, res: Response) => {
//   const { name }: {name: string} = req.body
//   db.run('INSERT INTO user (name) VALUES (?);', [name], function (err) {
//     if (err) {
//       if (err.message === 'SQLITE_CONSTRAINT') {
//         res.send(err)
//       }
//       console.log(err.message)
//       res.send({ err })
//     } else {
//       res.send(this)
//     }
//   })
// })

// app.post('/cite', (req: Request, res: Response) => {
//   const { description }: {description: string} = req.body
//   const response = db.run('INSERT INTO cite (description) VALUES (?);', [description])
//   res.send(JSON.stringify(response))
// })

// app.get('/user', (req: Request, res: Response) => {
//   db.all('SELECT * FROM user;', [], (err, rows) => {
//     if (err) {
//       console.log(err.message)
//     } else {
//       res.status(200)
//       res.send(rows)
//     }
//   })
// })

app.listen(4320, () => {
  console.log('Server on http://localhost:4320')
})
