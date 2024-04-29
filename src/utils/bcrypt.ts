import { compare, hash } from 'bcrypt'

export const encryptPass = async (pass: string) => {
  const hashPass = await hash(pass, 10)
  return hashPass
}

export const comparePass = async (plainP: string, hashP: string) => {
  return await compare(plainP, hashP)
}
