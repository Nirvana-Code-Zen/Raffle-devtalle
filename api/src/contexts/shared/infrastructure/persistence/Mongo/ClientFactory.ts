import { config } from '../../config'

import { type PersistConfig } from '../persistConfig'

export function ClientFactory (): void {}

ClientFactory.createClient = function (): unknown {
  const mongoConfig: PersistConfig = config.db

  return mongoConfig
}