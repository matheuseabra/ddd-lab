import * as express from 'express';

export abstract class Controller {
  protected req: express.Request;
  protected res: express.Response;

  protected abstract execImplementation(): Promise<void | any>;

  constructor(req: express.Request, res: express.Response) {
    this.req = req;
    this.res = res;
  }

  public async execute(req: express.Request, res: express.Response) {
    try {
      this.req = req;
      this.res = res;

      await this.execImplementation();
    } catch (error) {
      console.log(`[BaseController]: Uncaught controller error`);
      console.log(error);
      this.fail('Unexpected error occurred');
    }
  }

  public static jsonResponse(
    res: express.Response,
    code: number,
    message: string
  ) {
    return res.status(code).json({ message });
  }

  public ok<T>(res: express.Response, dto?: T) {
    if (!!dto) {
      res.type('application/json');
      return res.status(200).json(dto);
    } else {
      return res.sendStatus(200);
    }
  }

  public created(res: express.Response) {
    return res.sendStatus(201);
  }

  public clientError(message?: string) {
    return Controller.jsonResponse(
      this.res,
      400,
      message ? message : 'Unauthorized'
    );
  }

  public unauthorized(message?: string) {
    return Controller.jsonResponse(
      this.res,
      401,
      message ? message : 'Unauthorized'
    );
  }

  public forbidden(message?: string) {
    return Controller.jsonResponse(
      this.res,
      403,
      message ? message : 'Forbidden'
    );
  }

  public conflict(message?: string) {
    return Controller.jsonResponse(
      this.res,
      409,
      message ? message : 'Conflict'
    );
  }

  public notFound(message?: string) {
    return Controller.jsonResponse(
      this.res,
      404,
      message ? message : 'Not found'
    );
  }

  public fail(error: Error | string) {
    console.log(error);
    return this.res.status(500).json({ message: error.toString() });
  }
}
