import {Component, Injector, OnInit} from "@angular/core";
import {Page, User} from "../../shared/data-model";
import {_HttpClient} from "@delon/theme";

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html'
})
export class UserListComponent implements OnInit {
  page: Page<User>;
  userList: User[] = [];
  loading: boolean = false;
  constructor(
    private injector: Injector,
    // private http: _HttpClient
  ) {
    // super(injector);
    this.page = new Page();
    this.page.page = 1;
    this.page.size = 10;
  }

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this.loading = true;
    setTimeout(() => {
      this.userList = [
        new User('zhangsan', '123456'),
        new User('lisi', '123456'),
        new User('wanger', '123456')
      ];
      this.page.totalCount = this.userList.length;
      this.loading = false;
    }, 1000);
  }
}
