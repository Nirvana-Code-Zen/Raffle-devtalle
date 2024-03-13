import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

import { config } from '../config'

export function JwtAuthenticator (): void {
  const saltRounds = bcrypt.genSaltSync(10)
  const authAlgorithm = 'HS256'

  this.hashPassword = function (password: string): string {
    return bcrypt.hashSync(password, saltRounds)
  }

  this.verifyPassword = function (password: string, hash: string): boolean {
    return bcrypt.compareSync(password, hash)
  }

  this.sign = function (payload: any): string {
    return jwt.sign(payload, config.jwt.secret, { expiresIn: '1h', algorithm: authAlgorithm })
  }

  this.verifyToken = function (token: string): unknown {
    return jwt.verify(token, config.jwt.secret, { algorithms: [authAlgorithm] })
  }
}
