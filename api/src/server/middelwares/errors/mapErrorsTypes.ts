import Boom from '@hapi/boom'

enum errorTypes {
  INTERNAL_SERVER_ERROR = 'INTERNAL_SERVER_ERROR',
}

const Errors = {
  InvalidPathError: (message: string) => Boom.notFound(message),
  UnprocessableEntityError: (message: string, info: unknown) => Boom.badData(message, info),
  InvalidArgumentError: (message: string, info: unknown) => Boom.badImplementation(message, info),
  NotFoundError: (message: string, info: unknown) => Boom.notFound(message, info),
  AlreadyExistError: (message: string, info: unknown) => Boom.conflict(message, info),
  AuthorizationError: (message: string, _info: never) => Boom.unauthorized(message)
}

export const MapError = ({ key, message, info }: { key: string, message: string, info?: unknown }): any =>
  Errors[key]
    ? Errors[key](message, info)
    : Boom.badImplementation(errorTypes.INTERNAL_SERVER_ERROR, info)
