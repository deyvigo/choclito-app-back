import { sign, verify } from 'jsonwebtoken'

const TOKEN_SECRET = 'secret'

interface Parameter {
  username: string,
  rol: string
}

export const createJwt = ({ username, rol}: Parameter) => {
  const response = sign({
    data: {
      username,
      rol
    }
  },
  TOKEN_SECRET
  )
  return response
}

export const verifyToken = (jwToken: string) => {
  try {
    return verify(jwToken, TOKEN_SECRET)
  } catch (err) {
    return err
  }
}
