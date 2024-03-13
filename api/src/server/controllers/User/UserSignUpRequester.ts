import type { Request, Response } from 'express'
import httpStatus from 'http-status'

import type { UserSignUp } from '~context/User/application/UserSignUp'

export function UserSignUpRequester (userSignUp: typeof UserSignUp): void {
  this.userSignUp = userSignUp

  this.run = async (req: Request, res: Response): Promise<void> => {
    const { email, password } = req.body
    const userLogged = await this.userSignUp.run({ email, password })
    res.status(httpStatus.CREATED).json(userLogged)
  }
}
