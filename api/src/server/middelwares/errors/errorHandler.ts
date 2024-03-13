import type { NextFunction, Response, Request } from 'express'

import { config } from '../../../contexts/shared/infrastructure/config'

import { MapError } from './mapErrorsTypes'

interface HtttpError {
  statusCode: number
  message: string
  stack?: string | undefined
}

interface ExtraInfoError extends Error {
  data?: unknown
}

function errorStack (error: ExtraInfoError): HtttpError {
  const boomError = MapError({
    key: error.name,
    message: error.message,
    info: error.data
  })

  const { data, output: { payload } } = boomError

  const mapError = {
    ...payload
  }

  data && (mapError.data = data)

  if (config.env.dev) {
    return {
      ...mapError,
      info: error.stack
    }
  }

  return mapError
}

export function onError (err: any, _req: Request, res: Response, _next: NextFunction): void {
  const error = errorStack(err)
  res.status(error.statusCode).json(error)
}
