import type * as http from 'http'

import cors from 'cors'
import express, { type NextFunction, type Request, type Response } from 'express'
import Router from 'express-promise-router'

import { WinstonLogger } from '../contexts/shared/infrastructure/Logger/WinstonLogger'

import { Authenticator, onError } from './middelwares'
import { registerRoutes } from './routes'
import { InvalidPathError } from './routes/InvalidPathError'

import { type Logger } from '~context/shared/domain/Logger'

interface ServerInterface {
  stop: () => Promise<void>
  listen: () => Promise<void>
  getHttpServer: () => http.Server
}

export async function Server (port: string): Promise<ServerInterface> {
  let httpServer: http.Server
  const logger: Logger = WinstonLogger()
  const expressApp: express.Express = express()
  const router = Router()

  router.use(cors())
  router.use(Authenticator)

  expressApp.use(express.json())
  expressApp.use(express.urlencoded({ extended: true }))
  expressApp.use(router)

  expressApp.use(onError)

  await registerRoutes(router)

  router.use((req: Request, res: Response, next: NextFunction) => {
    onError(new InvalidPathError(req.url), req, res, next)
  })

  async function listen (): Promise<void> {
    await new Promise(resolve => {
      httpServer = expressApp.listen(port, () => {
        logger.info(`Server listening on port ${port} in ${expressApp.get('env')} mode`)
        logger.info('Press CTRL-C to stop\n')
        resolve(true)
      })
    })
  }

  function getHttpServer (): http.Server {
    return httpServer
  }

  async function stop (): Promise<void> {
    await new Promise((resolve, reject) => {
      httpServer.close((err?: Error) => {
        if (err) {
          reject(err)
          return
        }
        resolve(true)
      })
    })
  }

  return {
    stop,
    listen,
    getHttpServer
  }
}
