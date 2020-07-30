

// this will be the global resourceList for the game, every resource income and deduction will result in this object
/*
  目前分为 add list 和deduction list，产出表和消耗表
  消耗表目前只有货币是周期消耗的资源，
  其他资源只有在建造/升级建筑的时候进行一次性的扣除
  产出表先分各个等级的资源，然后再细分每种资源

  resourceList 应该在游戏开始的时候进行更新，被存档中的
 */

import React from "react";

export class RunningGame {
  constructor(gameJson) {
    let resourceList = gameJson.resuourcesList;
    let lands = gameJson.lands;
    console.log(123123123123123);
  }

  renderCanvas(){
    console.log(22222222222);
    return (
      <div>
        <h1>this is a testing canvas</h1>
      </div>
    )
  }
}