import { type Request, type Response } from 'express'
import httpStatus from 'http-status'

import { type SearchUserProfile } from '~context/User/application/SearchUserProfile'

export function SearchUserProfileRequester (sercherUserProfile: typeof SearchUserProfile): void {
  this.userSearcher = sercherUserProfile

  this.run = async (req: Request, res: Response) => {
    const result = await this.userSearcher.run(req.headers.userId)
    res.status(httpStatus.OK).json(result)
  }
}
