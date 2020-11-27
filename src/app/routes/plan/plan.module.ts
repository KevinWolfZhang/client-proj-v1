import {NgModule} from '@angular/core';
import {SharedModule} from '@shared';
import {PlanRoutingModule} from './plan-routing.module';
import {PlanExaisFlightPlanComponent} from './exais-flight-plan/exais-flight-plan.component';
import {PlanExaisFlightPlanEditComponent} from './exais-flight-plan/edit/edit.component';
import {PlanExaisFlightPlanViewComponent} from './exais-flight-plan/view/view.component';
import {PlanService} from "./service/plan.service";

const COMPONENTS = [
  PlanExaisFlightPlanComponent];
const COMPONENTS_NOROUNT = [
  PlanExaisFlightPlanEditComponent,
  PlanExaisFlightPlanViewComponent];

@NgModule({
  imports: [
    SharedModule,
    PlanRoutingModule
  ],
  declarations: [
    ...COMPONENTS,
    ...COMPONENTS_NOROUNT
  ],
  providers: [
    PlanService
  ]
})
export class PlanModule { }
