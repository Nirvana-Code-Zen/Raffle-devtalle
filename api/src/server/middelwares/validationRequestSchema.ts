import type { NextFunction, Request, Response } from 'express'
import { validationResult, type ValidationError } from 'express-validator'

interface validationErrors {
  statusCode: number
  error: string
  message: string
  info: string
  data?: Array<Record<string, string>>
}

function UnprocessableEntityError (data: unknown[]): void {
  this.name = 'UnprocessableEntityError'
  this.message = 'Invalid request'
  this.data = data
  this.stack = new Error(this.message).stack
}

UnprocessableEntityError.prototype = Error.prototype

export function validateRequestSchema (req: Request, _res: Response, next: NextFunction): validationErrors | unknown {
  const validationErrors = validationResult(req)

  if (validationErrors.isEmpty()) {
    next()
    return
  }

  const errors = validationErrors.array().map((error: ValidationError) => {
    if (error.type === 'field') {
      return {
        [error.path]: error.msg
      }
    }

    return error
  })

  next(new UnprocessableEntityError(errors))
}
