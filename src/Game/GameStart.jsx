import newGameTemplate from '../GameTemplate/newGameTemplate';
import {RunningGame} from "./GameRun";
import React from 'react';


/*
计划中这个file的function应该解决游戏开始的时候的各种文件load和save的内容

load的过程应该validate保存的json file中的各种数据，防止被sb玩家恶意篡改

 */

function objLength(obj){
  let i=0;
  for (let x in obj){
    if(obj.hasOwnProperty(x)){
      i++;
    }
  }
  return i;
}


export const NewGameStart = (event) => {
  event.preventDefault();
  initializeJSON(newGameTemplate);
  // todo: generate random obstacles on the map
};

export const SavedGameStart = (event) => {

};

export function initializeJSON(JSON) {
  if (saveGameValidationProcess(JSON)) {
    const RealGameStart = new RunningGame(JSON);
    return (
      RealGameStart.renderCanvas()
    )
  }
  return(
    <div>
      <h3>Game broken</h3>
    </div>
  )
}

function saveGameValidationProcess(JSON){
  //validate land size
  for (let each of JSON.lands) {
    console.log(each);
    console.log(each.landY);
    console.log(objLength(each.buildings));
    if (each.landY !== objLength(each.buildings)){
      // throw 'land vertical size does not match';
      return false;
    }
    for (let eachRow of each.buildings) {
      if (each.landX !== objLength(eachRow)) {
        // throw 'land horizontal size does not match'
        return false;
      }
    }
    // validate population and resource
    // housing capacity = 5 * 10^(building level - 1)
    // warehouse capacity = 500 * 10 ^ (building level - 1)
    let population = [0,0,0,0];
    let resourceCapacity = [0,0,0,0];
    for (let eachBuilding of each.buildingInfo) {
      if (eachBuilding.buildingType === 'housing'){
        if (eachBuilding.population !== 5 * Math.pow(10,eachBuilding.buildingLevel -1)) {
          // throw 'housing population capacity does not match'
          return false;
        }
        population[eachBuilding.buildingLevel -1] += eachBuilding.population;
      }
      if (eachBuilding.buildingType === "warehouse") {
        if (eachBuilding.capacity !== 500 * Math.pow(10, eachBuilding.buildingLevel - 1)) {
          // throw 'warehouse capacity does not match'
          return false;
        }
        resourceCapacity[eachBuilding.buildingLevel - 1] += eachBuilding.capacity;
      }
    }

    // validate population size, for each level, require population = sum of housing capacity
    //这个一般不会出错，但是如果有sb乱改存档，就会crash掉
    if (JSON.population.level1 !== population[0] || JSON.population.level2 !== population[1] ||
        JSON.population.level3 !== population[2] || JSON.population.level4 !== population[3]) {
      return false;
    }

    // validate warehouse capacity 其实我觉得不用validate
  }
  // otherwise, the save is valid and return true
  console.log(true);
  return true;
}