import {Component, OnInit, ViewChild} from '@angular/core';
import {ModalHelper} from '@delon/theme';
import {STColumn, STComponent} from '@delon/abc/st';
import {SFSchema} from '@delon/form';
import {PlanService} from "../service/plan.service";
import {HttpClient} from '@angular/common/http';
import {FlightPlan2} from "../shared/data-model";

@Component({
  selector: 'app-plan-exais-flight-plan',
  templateUrl: './exais-flight-plan.component.html',
})
export class PlanExaisFlightPlanComponent implements OnInit {
  url = `/user`;
  searchSchema: SFSchema = {
    properties: {
      no: {
        type: 'string',
        title: '编号'
      }
    }
  };
  @ViewChild('st', { static: false }) st: STComponent;
  columns: STColumn[] = [
    { title: '编号', index: 'no' },
    { title: '调用次数', type: 'number', index: 'callNo' },
    { title: '头像', type: 'img', width: '50px', index: 'avatar' },
    { title: '时间', type: 'date', index: 'updatedAt' },
    {
      title: '',
      buttons: [
        // { text: '查看', click: (item: any) => `/form/${item.id}` },
        // { text: '编辑', type: 'static', component: FormEditComponent, click: 'reload' },
      ]
    }
  ];

  id;
  flightPlan: FlightPlan2;

  constructor(
    private http: HttpClient,
    private modal: ModalHelper,
    private planService: PlanService
  ) { }

  ngOnInit() { }

  add() {

  }

  search(id?) {
    if (id) {
      this.planService.getExaistFlightPlanById(1210);
      // .subscribe(value => {
      //   this.flightPlan = value.body.Data;
      //   console.log(this.flightPlan);
      // });
    } else {
      // let params = new HttpParams();
      // params.append('Year', '2020');
      // params.append('Month', '07');
      // params.append('Day', '15');
      const params = {
        "Year": "2020", //年份
        "Month": "09",//月份
        "Day": "26"//日
      }
      this.planService.getExaisFlightPlanByDate(params).subscribe(value => {
        console.log(value.body.Data);
      })
    }
  }
}
