import type { UserEntity } from './User'

export interface UserRepository {
  signUp: (email: string, password: string) => Promise<UserEntity>
  searchOne: (queryOpts: unknown) => Promise<UserEntity>
}
