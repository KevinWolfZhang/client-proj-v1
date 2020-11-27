import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PlanExaisFlightPlanComponent} from './exais-flight-plan/exais-flight-plan.component';

const routes: Routes = [
  { path: 'exais-flight-plan', component: PlanExaisFlightPlanComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlanRoutingModule { }
