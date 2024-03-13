import { type NextFunction, type Request, type Response } from 'express'

import { JwtAuthenticator } from '../../contexts/shared/infrastructure'

function UnauthorizedError (msg: string): void {
  this.name = 'AuthorizationError'
  this.message = 'Unauthorized access to this resource.'
  this.stack = new Error(msg).stack
}

export function Authenticator (req: Request, _res: Response, next: NextFunction): unknown {
  const pathNotRequiredAuthorization: string[] = ['/user/auth/signup', '/user/auth/login']

  if (pathNotRequiredAuthorization.includes(req.originalUrl)) {
    next()
    return
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_, token] = req.headers.authorization?.split(' ') as string[]

  if (!token) {
    next(new UnauthorizedError('Missing Bearer Token')); return
  }

  try {
    const authenticator = new JwtAuthenticator()
    const auth = authenticator.verifyToken(token)
    req.headers.userId = auth.id
    next()
  } catch (error) {
    next(new UnauthorizedError(error.message))
  }
}
