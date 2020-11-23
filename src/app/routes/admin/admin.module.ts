import {NgModule} from "@angular/core";
import {SharedModule} from "@shared";
import {UserListComponent} from "./users/user-list/user-list.component";
import {AdminRoutingModule} from "./admin.routing.module";
import {UserComponent} from "./users/user.component";
import {PageHeaderModule} from "@delon/abc";

const USER_COMPONENTS = [
  UserListComponent,
  UserComponent
];

@NgModule({
  imports: [
    SharedModule,
    PageHeaderModule,
    AdminRoutingModule
  ],
  declarations: [
    ...USER_COMPONENTS
  ]
})
export class AdminModule {}
