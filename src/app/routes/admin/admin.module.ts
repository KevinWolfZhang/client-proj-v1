import {NgModule} from "@angular/core";
import {SharedModule} from "@shared";
import {UserListComponent} from "./users/user-list/user-list.component";
import {AdminRoutingModule} from "./admin-routing.module";
import {UserComponent} from "./users/user.component";
import {PageHeaderModule} from "@delon/abc";
import { AdminRolesComponent } from './roles/roles.component';
import { AdminRolesEditComponent } from './roles/edit/edit.component';
import { AdminRolesViewComponent } from './roles/view/view.component';
import {AdminService} from "./shared/admin.service";
import {PlanService} from "../plan/service/plan.service";

const COMPONENTS = [
  UserListComponent,
  UserComponent
,
  AdminRolesComponent];

const COMPONENTS_NOROUNT = [


  AdminRolesEditComponent,
  AdminRolesViewComponent];

@NgModule({
  imports: [
    SharedModule,
    PageHeaderModule,
    AdminRoutingModule
  ],
  declarations: [
    ...COMPONENTS,
    ...COMPONENTS_NOROUNT
  ],
  providers: [AdminService, PlanService]
})
export class AdminModule {}
