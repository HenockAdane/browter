import { Request, Response, NextFunction } from 'express'

export function CatchExceptionsHandler(
  routeHandler: any,
  logExceptions: boolean = false
) {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      await routeHandler(req, res)
    } catch (err) {
      if (logExceptions) console.log(err)
      next(err)
    }
  }
}
