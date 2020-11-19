import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {UserListComponent} from "./users/user-list/user-list.component";

const routes = [
  {path: '', redirectTo: 'user-list', pathMatch: 'full'},
  {path: 'user-list', component: UserListComponent}
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class AdminRoutingModule {}
