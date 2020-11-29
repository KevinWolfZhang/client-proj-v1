import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders, HttpParams, HttpRequest} from "@angular/common/http";
import {SettingsService} from "@delon/theme";
import {TokenStoreService} from "./token-store.service";
import {Observable} from "rxjs/index";
import {mergeMap} from "rxjs/internal/operators";
import {TokenStore} from "./token-store";

interface OauthToken {
  access_token: string;
  token_type: string;
  refresh_token: string;
  expires_in: number;
  scope: string;
  user: {id: number, username: string}
}

@Injectable()
export class OauthService {
  private refreshTokenTimer: any;

  constructor(private http: HttpClient, private settingService: SettingsService, private tokenStoreService: TokenStoreService) {

  }

  getLocalSessionToken() {
    if (this.tokenStoreService.get()) {
      return this.tokenStoreService.get().sessionToken;
    } else {
      return null;
    }
  }

  obtainAccessToken(username: string, password: string, remember: boolean): Observable<void> {
    let headers = new HttpHeaders();
    const clientId = 'adcc';//this.settingService.app.clientId;
    const clientSecret = 'adcc';
    headers = headers.append('Authorization', 'Basic' + btoa(`${clientId}:${clientSecret}`)); //btoa() 转换为base-64编码的字符串
    headers = headers.append('Content-type', 'application/x-www-form-urlencoded');
    let body = new HttpParams();
    body.append('grant-type', 'password');
    body.append('username', username);
    body.append('password', password);

    return this.http.post<OauthToken>('/oauth/token', body, {headers: headers}).pipe(
      mergeMap((result: any) => {
        console.log("已取得access token");
        const tokenModel: TokenStore = {
          accessToken: result.access_token,
          refreshToken: result.refreshToken,
          expiresIn: result.expires_in,
          user: result.user,
          sessionToken: this.tokenStoreService.get().sessionToken,
          createdAt: new Date()
        }
        this.tokenStoreService.set(tokenModel, remember);
        return Observable.create(observer => observer.next())
      })
    )
  }

  refreshAccessToken(refreshToken: string): Observable<OauthToken> {
    let headers: HttpHeaders = new HttpHeaders();
    const clientId = 'adcc';
    const clientSecret = 'adcc';
    headers = headers.append('Authorization', 'Basic' + btoa(`${clientId} + ${clientSecret}`));
    headers = headers.append('Content-type', 'application/x-www-form-urlencoded');
    let body: HttpParams = new HttpParams();
    body = body.append('grant_type', 'refresh_token');
    body = body.append('refresh_token', refreshToken);
    return this.http.post<OauthToken>('/oauth/token', body, {headers: headers});
  }

  startAutoRefreshAccessToken() {
    const tokenStore = this.tokenStoreService.get();
    if (tokenStore) {
      if (this.refreshTokenTimer) {
        clearTimeout(this.refreshTokenTimer);
      }
      // 计算刷新时间 = 过期时间 - 提前刷新时间
      const refreshReservedSeconds = tokenStore.expiresIn / 2 - 300;
      const refreshTime = moment();
    }
  }
}
