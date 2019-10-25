import { Request, Response, NextFunction } from 'express'
import usersSvc from '../../services/users'

const getUsers = (req: Request, res: Response, next: NextFunction) => {
  res.send(usersSvc.getUsers())
}

export default {
  getUsers
}
