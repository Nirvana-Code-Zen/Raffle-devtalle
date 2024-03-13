import { WinstonLogger } from '../../../shared/infrastructure'

export function AuthError (message: string): void {
  this.name = 'AuthorizationError'
  this.message = 'your email/password are not valid, please check your email/password'
  this.data = null
  this.stack = message

  WinstonLogger().error(this)
}
