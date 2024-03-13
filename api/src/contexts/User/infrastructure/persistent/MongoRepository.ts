import { UserEntityModel } from './mongo/UserEntityModel'

import type { UserAuthEntity } from '~context/User/domain'
import type { Logger } from '~context/shared/domain/Logger'

export function MongoRepository (logger: Logger): void {
  this.logger = logger

  this.signUp = async (user: UserAuthEntity): Promise<void> => {
    await this.persist(user)
  }

  this.searchOne = async (queryOptions: unknown): Promise<any> => {
    const userModel = await this.entitySchema()
    const user = await userModel.findOne(queryOptions)
    return user
  }

  this.entitySchema = async (): Promise<unknown> => await UserEntityModel()
}
