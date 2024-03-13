export interface Authenticator {
  hashPassword: (password: string) => string
  verifyPassword: (password: string, hash: string) => boolean
  sign: (payload: any) => string
  verifyToken: (token: string) => unknown
}
