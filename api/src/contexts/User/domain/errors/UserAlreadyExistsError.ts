import { AlreadyExistError } from '../../../shared/domain/errors'
import { WinstonLogger } from '../../../shared/infrastructure'

export function UserAlreadyExistsError (userEmail: string): void {
  this.message = `User email ${userEmail} already registered`

  WinstonLogger().error(this)
}

UserAlreadyExistsError.prototype = new AlreadyExistError()
