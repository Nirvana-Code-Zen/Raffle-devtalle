import type { Request, Response } from 'express'
import httpStatus from 'http-status'

export function StatusGetRequester (): void {
  this.run = async function (_req: Request, res: Response): Promise<void> {
    res.status(httpStatus.OK).json({ status: 'OK' })
  }
}
