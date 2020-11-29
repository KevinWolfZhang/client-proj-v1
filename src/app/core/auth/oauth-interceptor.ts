import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Injector} from "@angular/core";
import {ErrorObserver, from, Observable} from "rxjs/index";
import {ignore} from "selenium-webdriver/testing";
import {TokenStoreService} from "./token-store.service";
import {Router} from "@angular/router";

export class OauthInterceptor implements HttpInterceptor {
  constructor(private injector: Injector) {

  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const ignores = [new RegExp('assets/.*'), new RegExp('.*/passport/login'), new RegExp('.*/auth/token')];
    for (let i = 0, _a = ignores; i < ignores.length; i++) {
      const item = _a[i];
      if (item.test(req.url)) {
        return next.handle(req);
      }
    }
    const model = this.injector.get(TokenStoreService).get();
    if (model && model.accessToken) {
      req = req.clone({
        setHeaders: {
          Authrization: 'Bearer ' + model.accessToken,
          AdccSessionToken: model.sessionToken
        }
      });
    } else {
      this.injector.get(Router).navigateByUrl('/passport/login');
      return ErrorObserver.error({status: '401', from: 'oauth-intercept'});
    }
    return next.handle(req);
  }
}
