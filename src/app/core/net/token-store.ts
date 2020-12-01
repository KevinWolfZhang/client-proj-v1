export class TokenStore {
  accessToken: string;
  refreshToken: string;
  expiresIn: string;
  createdAt: Date;
  sessionToken?: string;
  user: {id: number, username: string}
}
