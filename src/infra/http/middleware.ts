import { isProduction } from '../../config';
import IAuthService from '../../modules/auth/types/authService';
import express from 'express';

export class Middleware {
  private authService: IAuthService;

  constructor(authService: IAuthService) {
    this.authService = authService;
  }

  private endRequest(code: 400 | 401 | 403, res: express.Response): any {
    return res.status(code).end();
  }

  public ensureAuthenticated() {
    return async (
      req: express.Request,
      res: express.Response,
      next: express.NextFunction
    ) => {
      const token = req.headers['authorization'];
      if (token) {
        const decoded = this.authService.decodeJWT(token);
        if (!decoded) {
          return this.endRequest(403, res);
        }
      }
    };
  }
}
