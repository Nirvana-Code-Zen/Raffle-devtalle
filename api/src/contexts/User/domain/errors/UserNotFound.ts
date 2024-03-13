import { NotFoundError } from '../../../shared/domain/errors'
import { WinstonLogger } from '../../../shared/infrastructure'

export function UserNotFoundError (data: unknown): void {
  this.message = 'User not found'
  this.data = data
  this.stack = (new Error()).stack

  WinstonLogger().error(this)
}

UserNotFoundError.prototype = new NotFoundError()
