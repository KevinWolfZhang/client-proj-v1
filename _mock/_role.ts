import {MockRequest} from "@delon/mock";

const list:any = [
  {id:0,roleCode:'SUP_ADMIN',roleName:'超级管理员',comments:'系统默认管理员角色,不能修改与删除'},
  {id:1,roleCode:'NORM_ADMIN',roleName:'管理员',comments:'管理员'},
  {id:180,roleCode:'ZLQR',roleName:'资料确认',comments:'资料确认'},
  {id:181,roleCode:'ZLSH',roleName:'资料审核',comments:'资料审核'},
  {id:182,roleCode:'ZLHQ',roleName:'资料会签',comments:'资料会签'},
  {id:183,roleCode:'ZLFB',roleName:'资料发报',comments:'资料发报'},
  {id:184,roleCode:'ZLSB',roleName:'资料上报',comments:'资料上报'},
  {id:190,roleCode:'ZDYMB',roleName:'自定义模板',comments:'自定义模板相关权限，新增、编辑、删除、查看他人模板'},
  {id:192,roleCode:'ADCC01',roleName:'数据公司01',comments:'测试数据测试数据'},
  {id:200,roleCode:'WK_SB',roleName:'WK_SB',comments:''},
  {id:220,roleCode:'ADMIN',roleName:'ADMIN',comments:'测试数据测试数据测试数据测试数据测试数据'},
  {id:221,roleCode:'fb',roleName:'发报',comments:'资料上报'},
  {id:260,roleCode:'ROLETEST',roleName:'测试角色权限',comments:''},
  {id:263,roleCode:'CSQX2',roleName:'测试权限角色2',comments:''},
  {id:266,roleCode:'JTZLWH',roleName:'静态资料维护',comments:''},
  {id:267,roleCode:'DTGL',roleName:'地图管理',comments:'测试权限角色2'},
  {id:268,roleCode:'DTCK',roleName:'地图查看',comments:'备静态资料维护权限'},
  {id:300,roleCode:'DT',roleName:'地图',comments:'管理基础地图和实况地图权限'},
  {id:301,roleCode:'JCSJCK',roleName:'基础数据查看',comments:'查看基础地图和实况地图权限'},
  {id:302,roleCode:'JCSJXG',roleName:'基础数据修改',comments:'地图模块权限，包括实况地图和基础地图模块的操作权限'}
];
const total = 20;

function genData(params: any) {
  let ret = [...list];
  const pi = +params.pi;
  const ps = +params.ps;
  const start = (pi - 1)*ps;

  return {total: ret.length, list: ret.slice(start, pi*ps)};
}

function saveData(value: any) {
  if (value.id) {
    // 修改
    let item = list.find(data => data.id === +value.id);
    if (!item) {
      return {msg: '无效的用户信息'};
    }
    // if (!item) {
    //   let index = list.findIndex(item);
    //   list.splice(index, 1);
    // }
    Object.assign(item, value);
  } else {
    // 增加
    // Object.assign(list, value);
    list.push(value);
  }
}

function getRoleByCode(params: any) {
  if (params.roleCode) {
    let item = list.find(data => data.roleCode === params.roleCode);
    return [item];
  }
  return list;
}

export const ROLES = {
  'GET /roles': (req: MockRequest) => genData(req.queryString),
  'role/:id': (req: MockRequest) => list.find((data) => data.id === +req.params.id),
  'POST /role/save': (req: MockRequest) => saveData(req.body),
  '/role/byName': (req: MockRequest) => getRoleByCode(req.queryString)
}
