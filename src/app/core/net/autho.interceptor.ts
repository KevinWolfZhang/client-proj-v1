import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Inject, Injector } from '@angular/core';
import { Observable } from 'rxjs';
import { DA_SERVICE_TOKEN, ITokenService, JWTTokenModel } from '@delon/auth';
import { Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd';

export class AuthoInterceptor implements HttpInterceptor {
  constructor(
    private injector: Injector,
    @Inject(DA_SERVICE_TOKEN) private tokenService: ITokenService) {

  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const ignores = [new RegExp('.*/passport/login'), new RegExp('/assets/.*'), new RegExp('.*/auth/token')];
    for (let i = 0; i < ignores.length; i++) {
      if (ignores[i].test(req.url)) {
        next.handle(req);
      }
    }
    const tokenModel = this.tokenService.get<JWTTokenModel>(JWTTokenModel);
    if (tokenModel && tokenModel.token) {
      req = req.clone({
        setHeaders : {
          'authorization': 'Bearer ' + tokenModel.token
        }
      })
    } else {
      this.injector.get(Router).navigateByUrl('/passport/login');
      // this.injector.get(NzMessageService).error('status: \'401\', from: \'oauth-intercept\'');
      return Observable.throw({'status': '401', 'from': 'autho-intercept'});
    }
    return next.handle(req);
  }
}
