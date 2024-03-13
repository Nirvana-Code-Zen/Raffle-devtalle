import type { Logger } from '../../shared/domain/Logger'
import { Uuid } from '../../shared/domain/value-objects'
import { WinstonLogger } from '../../shared/infrastructure'
import type { Authenticator } from '../../shared/infrastructure/Auth/Authenticator'
import { UserAuth, type UserRepository } from '../domain'
import { UserAlreadyExistsError } from '../domain/errors/UserAlreadyExistsError'

import { UserFinder } from './UserFinder'

export function UserSignUp (repository: UserRepository, authenticator: Authenticator): void {
  this.repository = repository
  const userFinder = new UserFinder(repository)

  const logger: Logger = WinstonLogger()

  this.run = async (user: { email: string, password: string }): Promise<any> => {
    await this.ensureUserDoesNotExists(user.email)

    user.password = authenticator.hashPassword(user.password)

    const userId = Uuid.random().toString()

    const token = authenticator.sign({
      id: userId,
      email: user.email
    })

    const userEntity = new UserAuth({
      id: userId,
      ...user
    })

    await this.repository.signUp(userEntity)

    logger.info(`User ${user.email} signed in`)

    return {
      email: user.email,
      token
    }
  }

  this.ensureUserDoesNotExists = async (email: string): Promise<void> => {
    const user = await userFinder.byEmail(email)

    if (user) {
      throw new UserAlreadyExistsError(email)
    }

    return user
  }
}
