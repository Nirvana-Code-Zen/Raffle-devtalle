import { WinstonLogger } from '../contexts/shared/infrastructure/Logger/WinstonLogger'

import { Server } from './server'

export function RuffleAPI (): void {
  this.server = null
  this.httpServer = null

  this.start = async (port: string = '3000') => {
    try {
      this.server = await Server(port)
      await this.server.listen()
      this.httpServer = this.server.getHttpServer()
    } catch (error) {
      handleError(error)
    }
  }

  this.stop = async () => this.server.stop()

  function handleError (err: unknown): void {
    WinstonLogger().error(err as Error)
    process.exit(1)
  }
}

export type RuffleApiType = ReturnType<typeof RuffleAPI>
