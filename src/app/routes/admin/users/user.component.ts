import {Component, OnInit} from "@angular/core";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-admin',
  templateUrl: './user.component.html'
})
export class UserComponent implements OnInit {
  constructor(
    private http: HttpClient
  ) {

  }

  ngOnInit() {

  }
}
