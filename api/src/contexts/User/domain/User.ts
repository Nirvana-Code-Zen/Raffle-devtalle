import { UserUuid } from '../shared/domain'

export interface UserEntity {
  id: string
  avatar: string
  name: string
  lastname: string
  email: string
  birthday: Date
  password: string
  biography?: string
  location?: string
  website?: string
}

export type UserAuthEntity = Pick<UserEntity, 'id' | 'email' | 'password'>

export type UserWithoutPassword = Omit<UserEntity, 'password'>

export function User (user: UserEntity): void {
  const uuid = new UserUuid(user.id)

  this.id = uuid.toString()
  this.name = user.name
  this.password = user.password
  this.email = user.email
  this.avatar = user.avatar
  this.lastname = user.lastname
  this.birthday = user.birthday
  this.biography = user.biography
  this.location = user.location
  this.website = user.website
}

export function UserAuth (user: UserAuthEntity): void {
  const uuid = new UserUuid(user.id)

  this.id = uuid.toString()
  this.name = ''
  this.password = user.password
  this.email = user.email
  this.avatar = ''
  this.lastname = ''
  this.birthday = new Date()
}
