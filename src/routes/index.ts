import { readdirSync } from 'fs'
import { Router } from 'express'
import { router as routerRegister } from './register'

const PATH_DIR = `${__dirname}`
const router = Router()

const cleanFileName = (filename: string) => {
  return filename.split('.').shift()
}

// router.use('/register', routerRegister)
readdirSync(PATH_DIR).forEach((f) => {
  const cleanName = cleanFileName(f)
  if (cleanName !== 'index') {
    import(`./${cleanName}`).then((moduleRouter) => {
      router.use(`/${cleanName}`, moduleRouter.router) // router.use() -> sin punto la ruta a usar
      console.log(`Loading ... /${cleanName}`)
    }).catch(err => console.log(err))
  }
})

export { router }
