export function NotFoundError (message?: string): void {
  this.name = 'NotFoundError'
  this.message = message ?? ''
}

NotFoundError.prototype = Error.prototype
