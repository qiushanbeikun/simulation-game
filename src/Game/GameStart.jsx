import newGameTemplate from '../GameTemplate/newGameTemplate';



export function GameStart(dest) {

  if (dest === "load"){
    // load the existing game file and place on the gameJSONFile
    let existingGame = {};
    initializeJSON(existingGame);
  } else {
    // start a new game
    initializeJSON(newGameTemplate);
  }
}

function initializeJSON(JSON) {
  if (saveGameValidationProcess(JSON)) {
    // continue
  }
}

function saveGameValidationProcess(JSON){
  //validate land size
  for (let each of JSON.lands) {
    if (each.landY !== each.buidling.length ){
      throw 'land vertical size does not match';
    }
    for (let eachRow of each.buildings) {
      if (each.landX !== eachRow.length) {
        throw 'land horizontal size does not match'
      }
    }
    // validate population and resource
    // housing capacity = 5 * 10^(building level - 1)
    // warehouse capacity = 500 * 10 ^ (building level - 1)
    let population = [0,0,0,0];
    let resouceCapacity = [0,0,0,0];
    for (let eachBuilding of each.buildingInfo) {
      if (eachBuilding.buildingType === 'housing'){
        if (eachBuilding.population !== 5 * Math.pow(10,eachBuilding.buildingLevel -1)) {
          throw 'housing population capacity does not match'
        }
        population[eachBuilding.buildingLevel -1] += eachBuilding.population;
      }
      if (eachBuilding.buildingType === "warehouse") {
        if (eachBuilding.capacity !== 500 * Math.pow(10, eachBuilding.buildingLevel - 1)) {
          throw 'warehouse capacity does not match'
        }
        resouceCapacity[eachBuilding.buildingLevel - 1] += eachBuilding.capacity;
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
  return true;
}