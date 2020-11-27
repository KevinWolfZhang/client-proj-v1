import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {UserListComponent} from "./users/user-list/user-list.component";
import {UserComponent} from "./users/user.component";
import { AdminRolesComponent } from './roles/roles.component';

const routes: Routes = [
  {path: '', redirectTo: 'users', pathMatch: 'full'},
  {
    path: 'users',
    component: UserComponent,
    children: [
      {path: '', redirectTo: 'list', pathMatch: 'full'},
      {path: 'list', component: UserListComponent}
    ]
  }
,
  { path: 'roles', component: AdminRolesComponent }
  ]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class AdminRoutingModule {}
