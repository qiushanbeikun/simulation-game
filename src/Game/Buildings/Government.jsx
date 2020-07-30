
/*
民政大厅（government）：
提供人口管理能力(向下兼容)，每个大陆仅限一个，每一步分为8个小等级，每次升级增加100人口管理能力（100-》200-》300-》- - -》900）
每次大段位升级提升增加100人口管理能力，但是额外提供高级人口管理能力
第四步的government有且只有一个，最后一次升级只增加人口，不增加高级人后管理能力
故每个givernment理论上最多可以提供4000人口管理能力
每100人口需要一个管理劳动力岗位，故最多40个人口管理岗位
建造成本算入新大陆的开荒费中
每年维护费：货币 = 5（基础消耗）+ Math.celling(人口/100)
升级花费:
小段位： 50对应等级货币， 10 对应等级矿物，10对应等级建材 // todo
大段位： 50对应等级货币， 10 对应等级矿物，10对应等级建材 // todo
 */

// all the const numbers for a government building

const GOVERNMENT_RESOURCE_LIST = {
  BASE_POPULATION_CAPACITY: 100,
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

// // resources needed for a minor upgrade
// const MINOR_UPGRADE_RESOURCES = [
//   {credit: 50},
//   {mineral: 10},
//   {homeDepot: 10}
// ];
//
// //resources needed for a big upgrade
// const STEP_UPGRADE_RESOURCES = [
//   {credit: 50},
//   {mineral: 10},
//   {homeDepot: 10}
// ];
//
// const BASE_MAINTENANCE_FEE = [
//   {credit:5}
// ];


/*
  position: the coordinate to build the building
  resourcesList: the resource list of all resources

  return true if the building can be built successfully
  otherwise, send back the error message ie not a valid position/ not enough currency/resources
  ideally, this function will only be called when the "LivePositionCheck" is done and the check result is valid
  this function is just a template for other building, it will never be called
 */

export function BuildGovernment(position, resourceList){
  // valid resource level

  // change the targeting map

  // change stock of resources

  return false;
}

/*
  position: only need to refers to which continent the targeting build is at, detailed position is not actually needed
  resourcesList: the resource list of all resources
  return true if all the resources are enough, and modify the resource amount
  this does not return an object, 只是修改指向位置的数据
  otherwise should return error message of "not enough currency/resource"
 */

export function UpgradeGovernment(position, resourceList) {
  // valid
  return false;
}

/*
  this is just a calculator to gather all the resources for maintenance
  should return a resourceList
  this one does not do timing control
 */
export function GovernmentMaintenance(buildingInfo) {
  return [];
}