enum Environment {
  DEV = 'development',
  PROD = 'production',
  TEST = 'test'
}

export const config = {
  db: {
    dialect: 'mongodb',
    host: process.env.DB_HOST ?? 'localhost',
    port: Number(process.env.DB_PORT) ?? 5432,
    username: process.env.DB_USER ?? 'mong',
    database: process.env.DB_NAME ?? 'mongo',
    password: process.env.DB_PASSWORD ?? 'mongo'
  },
  env: {
    dev: process.env.NODE_ENV === Environment.DEV,
    prod: process.env.NODE_ENV === Environment.PROD,
    test: process.env.NODE_ENV === Environment.TEST
  },
  jwt: {
    secret: process.env.JWT_SECRET ?? 'secret'
  }
}
