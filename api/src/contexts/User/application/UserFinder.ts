import type { UserRepository } from '../domain'

export function UserFinder (repository: UserRepository): void {
  this.repository = repository

  this.byEmail = async (email: string): Promise<any> => {
    return this.repository.searchOne({
      where: {
        email
      }
    })
  }

  this.byId = async (id: string): Promise<any> => {
    return this.repository.searchOne({
      where: {
        id
      }
    })
  }
}
