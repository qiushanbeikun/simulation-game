/*
住房（housing）：
提供对应等级人口的住房。基础值为10，可以升级八次，每一次升级capacity增加10 （所有数据均为government的10%）
大陆住房数量没有限制，当到达人口管理数量上限时，新增住房不会增加总人口
升级花费:
小段位：//todo
第一步-》第二步：//todo
 */

const HOUSING_RESOURCE_LIST = {
  BASE_LABOUR_FORCE: 10,
  MANUFACTURE_RESOURCE_LIST: [
    {credit: 50},
    {mineral: 10},
    {homeDepot: 10}
  ],
  MINOR_UPGRADE_RESOURCES: [
    {credit: 50},
    {mineral: 10},
    {homeDepot: 10}
  ],
  STEP_UPGRADE_RESOURCES: [
    {credit: 50},
    {mineral: 10},
    {homeDepot: 10}
  ],
  BASE_MAINTENANCE_FEE:[
    {credit:5}
  ]
};

class Housing {
  constructor(statusData){
    this.steps = statusData.steps;
    this.level = statusData.level;
  }

}
