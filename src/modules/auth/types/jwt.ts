export interface IClaim {
  userId: string;
  isEmailVerified: boolean;
  email: string;
  username: string;
  adminUser: boolean;
}

export type IToken = string;

export type ISessionId = string;

export type IRefreshToken = string;
