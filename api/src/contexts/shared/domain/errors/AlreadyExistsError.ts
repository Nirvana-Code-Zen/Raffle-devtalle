export function AlreadyExistError (message?: string): void {
  this.name = 'AlreadyExistError'
  this.message = message ?? ''
  this.stack = (new Error(message)).stack
}

AlreadyExistError.prototype = Error.prototype
