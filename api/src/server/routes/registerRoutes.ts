import { type Router } from 'express'
import { glob } from 'glob'

import { bootDependencies } from '../dependency-injection'

export async function registerRoutes (router: Router): Promise<void> {
  await bootDependencies()

  const routes = glob.sync(`${__dirname}/**/*.route.*`)
  const importRoutes = routes.map(async (route) => {
    await register(route, router)
  })

  await Promise.all(importRoutes)
}

async function register (routePath: string, app: Router): Promise<void> {
  const route = await import(routePath)
  route.register(app)
}
