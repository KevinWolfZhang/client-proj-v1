import {HttpClient} from "@angular/common/http";
import {Role} from "./data-model";
import {Observable} from "rxjs/index";
import {Injectable} from "@angular/core";

@Injectable()
export class AdminService {
  constructor(
    private http: HttpClient
  ) {}

  getRoleList(): Observable<any> {
    return this.http.get<Role>('/roles?pi=1&ps=10');//
  }

  getRoleByCode(roleCode: any): Observable<any> {
    return this.http.get<Role>(`/role/byName?roleCode=${roleCode}`);
  }
}
