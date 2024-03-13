export function InvalidPathError (path: string): void {
  this.name = 'InvalidPathError'
  this.message = `Route ${path} Not found.`
  this.stack = (new Error()).stack
}

InvalidPathError.prototype = Error.prototype
