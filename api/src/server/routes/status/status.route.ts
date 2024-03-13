import { type Express } from 'express'

import { container } from '../../dependency-injection'

export const register = (app: Express): void => {
  const controller = container.get('Server.StatusGetRequester')
  app.get('/status', controller.run)
}
