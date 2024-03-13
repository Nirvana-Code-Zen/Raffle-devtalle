import type { Request, Response } from 'express'
import httpStatus from 'http-status'

import type { UserSignIn } from '~context/User/application/UserSignIn'

export function UserSignInRequester (userSignIn: typeof UserSignIn): void {
  this.userSignIn = userSignIn

  this.run = async (req: Request, res: Response): Promise<void> => {
    const { email, password } = req.body
    const userLogged = await this.userSignIn.run({ email, password })
    res.status(httpStatus.CREATED).json(userLogged)
  }
}
