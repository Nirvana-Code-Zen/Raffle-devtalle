import { type UserEntity, UserNotFoundError, type UserWithoutPassword } from '../domain'

import { type UserFinder } from './UserFinder'

function userMapProfile (user: UserEntity): UserWithoutPassword {
  return {
    id: user.id,
    avatar: user.avatar,
    name: user.name,
    lastname: user.lastname,
    email: user.email,
    birthday: user.birthday,
    biography: user.biography,
    location: user.location,
    website: user.website
  }
}

export function SearchUserProfile (UserSearcher: typeof UserFinder): void {
  this.userSearcher = UserSearcher

  this.run = async (id: string): Promise<any> => {
    const profile = await this.userSearcher.byId(id)

    if (!profile) throw new UserNotFoundError(`User with id ${id} not found`)

    return userMapProfile(profile)
  }
}
