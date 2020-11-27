export class TokenStore {
  accessToken: string;
  refreshToken: string;
  expiresIn: number;
  createdAt: Date;
  sessionToken?: string;
  user: {id: number, username: string}
}
