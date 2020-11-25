import { NgModule } from '@angular/core';
import { SharedModule } from '@shared';
import { PlanRoutingModule } from './plan-routing.module';
import { PlanListComponent } from './list/list.component';
import { PlanViewComponent } from './te/view/view.component';
import { PlanViewComponent } from './list/te/view/view.component';
import { PlanCurdComponent } from './curd/curd.component';
import { PlanCurdEditComponent } from './curd/edit/edit.component';
import { PlanCurdViewComponent } from './curd/view/view.component';
import { PlanEditsComponent } from './curd/view/edits/edits.component';

const COMPONENTS = [
  PlanListComponent,
  PlanCurdComponent,
  PlanEditsComponent];
const COMPONENTS_NOROUNT = [
  PlanViewComponent,
  PlanViewComponent,
  PlanCurdEditComponent,
  PlanCurdViewComponent];

@NgModule({
  imports: [
    SharedModule,
    PlanRoutingModule
  ],
  declarations: [
    ...COMPONENTS,
    ...COMPONENTS_NOROUNT
  ],
})
export class PlanModule { }
