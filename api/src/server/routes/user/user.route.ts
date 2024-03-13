import type { Express } from 'express'
import { body } from 'express-validator'

import { container } from '../../dependency-injection'
import { validateRequestSchema } from '../../middelwares'

export const register = (app: Express): void => {
  const authSchema = [
    body('email').exists().isEmail(),
    body('password').isString()
  ]

  const signIn = container.get('Server.UserSignUpRequester')
  const signUp = container.get('Server.UserSignInRequester')
  const searchUserProfile = container.get('Server.SearchUserProfileRequester')

  app.get('/user', searchUserProfile.run)

  app.post('/user/auth/signup', authSchema, validateRequestSchema, signIn.run)
  app.post('/user/auth/login', authSchema, validateRequestSchema, signUp.run)
}
