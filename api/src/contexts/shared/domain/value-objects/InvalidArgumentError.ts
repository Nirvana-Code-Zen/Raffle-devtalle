export function InvalidArgumentError (message: string, stack: string): void {
  Error.call(this, message)
  this.message = message
  this.name = 'InvalidArgumentError'
  this.stack = stack
}

export type InvalidArgumentErrorInstance = ReturnType<typeof InvalidArgumentError>
