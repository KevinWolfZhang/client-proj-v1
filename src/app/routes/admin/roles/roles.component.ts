import { Component, OnInit, ViewChild } from '@angular/core';
import { _HttpClient, ModalHelper } from '@delon/theme';
import { STColumn, STComponent } from '@delon/abc/st';
import { SFSchema } from '@delon/form';
import {Role} from "../shared/data-model";
import {AdminService} from "../shared/admin.service";
import {STData} from "@delon/abc";
import {PlanService} from "../../plan/service/plan.service";

@Component({
  selector: 'app-admin-roles',
  templateUrl: './roles.component.html',
})
export class AdminRolesComponent implements OnInit {
  roleList: STData[] = [];
  url = `/roles`;
  params = {roleCode: ''};
  searchSchema: SFSchema = {
    properties: {
      id: {
        type: 'number',
        title: '编号'
      }
    }
  };
  @ViewChild('st', { static: false }) st: STComponent;
  columns: STColumn[] = [
    { title: '编号', index: 'id' },
    { title: '代码', index: 'roleCode' },
    { title: '名称', width: '50px', index: 'roleName' },
    { title: '备注', index: 'comments' },
    {
      title: '',
      buttons: [
        { text: '查看'},//, click: (item: any) => `/form/${item.id}`
        { text: '编辑', type: 'static' }//, component: FormEditComponent, click: 'reload'
      ]
    }
  ];

  constructor(
    private http: _HttpClient,
    private modal: ModalHelper,
    private adminService: AdminService,
    private planService: PlanService
  ) { }

  ngOnInit() {
    this.loadData();
  }

  add() {

  }

  loadData() {
    this.adminService.getRoleList().subscribe(value => {
      if (value && value.list.length > 0) {
        this.roleList = value.list;
      }
    })
  }

  search() {
    this.adminService.getRoleByCode(this.params.roleCode).subscribe(value => {
      if (value) {
        this.roleList = value;
      }
    })
  }
}
