import type { Logger } from '../../shared/domain/Logger'
import { WinstonLogger } from '../../shared/infrastructure'
import type { Authenticator } from '../../shared/infrastructure/Auth/Authenticator'
import { User, type UserRepository } from '../domain'
import { AuthError } from '../domain/errors/AuthError'

import { UserFinder } from './UserFinder'

export function UserSignIn (repository: UserRepository, authenticator: Authenticator): void {
  this.repository = repository
  const userFinder = new UserFinder(repository)

  const logger: Logger = WinstonLogger()

  this.run = async (user: { email: string, password: string }): Promise<any> => {
    const userFound = await this.ensureUserExists(user.email)

    const userEntity = new User(userFound)
    delete userEntity.password

    if (!authenticator.verifyPassword(user.password, userFound.password)) {
      logger.error(`User ${user.email} tried to sign in with wrong password`)
      throw new AuthError(`${user.password} or ${user.email} not match`)
    }

    const token = authenticator.sign({
      email: user.email,
      id: userEntity.id
    })

    logger.info(`User ${user.email} signed in`)

    return {
      ...userEntity,
      token
    }
  }

  this.ensureUserExists = async (email: string): Promise<void> => {
    const user = await userFinder.byEmail(email)

    if (!user) {
      throw new AuthError(`${email} not found`)
    }

    return user
  }
}
