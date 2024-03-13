import path from 'path'

import { ContainerBuilder, YamlFileLoader } from 'node-dependency-injection'

const srcDir = path.join(__dirname, '../../../src')
const container = new ContainerBuilder(true, srcDir)
const loader = new YamlFileLoader(container)

export async function bootDependencies (): Promise<void> {
  await loader.load(`${__dirname}/application.yml`)
}

export { container }
