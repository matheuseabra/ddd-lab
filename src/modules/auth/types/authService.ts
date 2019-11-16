import { IClaim, IToken, IRefreshToken, ISessionId } from './jwt';

export default interface IAuthService {
  signJWT(props: IClaim): IToken;
  decodeJWT(token: string): Promise<IClaim>;
  createRefreshToken(): IRefreshToken;
  getTokens(username: string): Promise<string[]>;
  saveAuthenticatedUser(user: any): Promise<void>;
  deAuthenticateUser(username: string): Promise<void>;
  refreshTokenExists(refreshToken: IRefreshToken): Promise<boolean>;
  getUserNameFromRefreshToken(refreshToken: IRefreshToken): Promise<string>;
}
