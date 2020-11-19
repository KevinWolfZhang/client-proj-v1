import {NgModule} from "@angular/core";
import {SharedModule} from "@shared";
import {UserListComponent} from "./users/user-list/user-list.component";
import {AdminRoutingModule} from "./admin.routing.module";

const USER_COMPONENTS = [
  UserListComponent
];

@NgModule({
  imports: [
    SharedModule,
    AdminRoutingModule
  ],
  declarations: [
    ...USER_COMPONENTS
  ]
})
export class AdminModule {}
