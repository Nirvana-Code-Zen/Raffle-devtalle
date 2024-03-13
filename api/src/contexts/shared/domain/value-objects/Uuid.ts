import { v4 as uuid } from 'uuid'
import validate from 'uuid-validate'

import { InvalidArgumentError } from './InvalidArgumentError'

export function Uuid (uuid: string): void {
  this.value = uuid

  this.ensureIsValidUuid = (): void => {
    if (!validate(this.value)) throw new InvalidArgumentError('', `${this.constructor.name} does not allow the value <${this.value}> as valid uuid`)
  }

  this.toString = (): string => this.value

  this.ensureIsValidUuid()
}

Uuid.random = function (): typeof Uuid {
  return new Uuid(uuid())
}
