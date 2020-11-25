import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlanListComponent } from './list/list.component';
import { PlanCurdComponent } from './curd/curd.component';
import { PlanEditsComponent } from './curd/view/edits/edits.component';

const routes: Routes = [

  { path: 'list', component: PlanListComponent },
  { path: 'curd', component: PlanCurdComponent },
  { path: 'edits', component: PlanEditsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlanRoutingModule { }
