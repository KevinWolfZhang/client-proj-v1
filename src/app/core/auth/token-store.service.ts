import {Injectable} from "@angular/core";
import {SettingsService} from "@delon/theme";
import {BehaviorSubject, Observable} from "rxjs/index";
import {TokenStore} from "./token-store";
import {share} from "rxjs/internal/operators";

@Injectable()
export class TokenStoreService {
  private tokenStoreKey = 'token';
  private changeBehaviour;

  constructor(
    private settingService: SettingsService
  ) {
    this.changeBehaviour = new BehaviorSubject(this.get());
  }

  get(): TokenStore {
    // 先从session中读取，没有再从本地存储读取
    let data = sessionStorage.getItem(this.tokenStoreKey);
    if (!data) {
      data = localStorage.getItem(this.tokenStoreKey);
    }
    return data ? JSON.parse(data) : undefined;
  }

  set(tokenStoreModel: TokenStore, remember: boolean) {
    if (remember) {
      localStorage.setItem(this.tokenStoreKey, JSON.stringify(tokenStoreModel));
    } else {
      sessionStorage.setItem(this.tokenStoreKey, JSON.stringify(tokenStoreModel));
    }
    this.changeBehaviour.next(tokenStoreModel);
  }

  update(tokenStoreModel: TokenStore) {
    const sessionExist = sessionStorage.getItem(this.tokenStoreKey);
    if (sessionExist) {
      sessionStorage.setItem(this.tokenStoreKey, JSON.stringify(tokenStoreModel));
    } else {
      localStorage.setItem(this.tokenStoreKey, JSON.stringify(tokenStoreModel));
    }
    this.changeBehaviour.next(tokenStoreModel);
  }

  clear() {
    const tokenStore = this.get();
    if (tokenStore) {
      this.changeBehaviour.next(null);
      localStorage.removeItem(this.tokenStoreKey);
      sessionStorage.removeItem(this.tokenStoreKey);
    }
  }

  getUserId() {
    const token = this.get();
    if (token) {
      return token.user.id;
    }
  }

  getUserName() {
    const token = this.get();
    if (token) {
      return token.user.username;
    }
  }

  change(): Observable<TokenStore> {
    return this.changeBehaviour.pipe(share());
  }
}
