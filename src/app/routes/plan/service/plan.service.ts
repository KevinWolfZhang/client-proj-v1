import {_HttpClient} from "@delon/theme";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs/index";
import {HttpHeaders} from "@angular/common/http";
import {FlightPlan1, FlightPlan2} from "../shared/data-model";

@Injectable()
export class PlanService {
  constructor(
    private http: _HttpClient
  ) {

  }

  getExaistFlightPlanById(id: any)  {
    // let headers: HttpHeaders = new HttpHeaders();
    // headers = headers.append('token', '123');
    // let body: HttpParams = new HttpParams();
    // body = body.append('captcha', captcha);
    // return this.http.post<any>('/api/kaptcha/validateCaptcha', {}, {headers: headers});

    const headers = new HttpHeaders({
      'token': '123'
    })
    return this.http.get<FlightPlan2>(`/api/EXAISFlightPlan/GetModel?id=${id}`, null,{
      // headers: headers,
      observe: 'response'
    });
  }

  getExaisFlightPlanByDate(params: any): Observable<any> {
    // let headers: HttpHeaders = new HttpHeaders({
    //   'token': '123'
    // })
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append('token', '123');
    return this.http.post<any>(`/api/exaisflightplan/getlist`, params, null,{
      // headers: headers,
      observe: 'response'
    })
  }

//   let currentheaders: HttpHeaders = new HttpHeaders();
//   currentheaders = currentheaders.append('token', '123');
//   this.httpClient.post<any>('http://192.168.204.88:8090/api/EXAISFlightPlan/GetPageList',
// {
//   'pageIndex':1,
//   'pageSize':10
// }, {
//   headers: currentheaders
// }).subscribe(m=>{
//   console.log(m);
//   //this.routerService.navigateByUrl('/flight-plan/flight-plan-edit');
// });
}
