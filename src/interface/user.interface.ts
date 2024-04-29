export interface User {
  username: string,
  password: string,
  birthDay: Date,
  name: string,
  lastName: string,
  rol: number
}

export interface LoginUser {
  username: string,
  password: string
}

export interface GetUser {
  username: string,
  password: string,
  birthDay: Date,
  name: string,
  lastName: string,
  rol: string
}