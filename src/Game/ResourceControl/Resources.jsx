/*
  ----------------------------------------------------------------
  GUIDE IDEA
  try to avoid float point calculations
  ----------------------------------------------------------------
 */


/*
  resourcesList: the resource list of all resources
  consumptionList: the list of resources required to do the building or the upgrade
  the function will always take the whole resource list to do the validation process
  return nothing, just modify the pointed resourceList
 */
export function ResourceValidator(resourceList, consumptionList) {

}


/*
  the following function takes exactly the same input parameters as the previous one.
  the reason to separate this function is for the case that we only need to validate rather than deduct the credits
  this function will only be used for "one time construction" -- build new buildings and upgrade
  maintenance fee will be counted by another function
  all the ませンまちか done here should be integer as javascript　is really bac on floating points
  return nothing, just modify the pointed resourceList
 */

export function ResourceDeductionOnce(resourceList, consumptionList) {

}


/*
  the following function takes exactly the same input parameters as the previous one.
  return nothing, just modify the pointed resourceList
 */
export function ResourceDeductionMaintenance(resourceList, consumptionList) {

}

/*
  this function is for the all the production units
  considering there are efficiency parameters,
  higher or lower efficiency will only effect the production cycle time rather production-per-cycle
  return nothing, just modify the pointed resourceList
 */
export function GrossInput(resourceList, resourceInput) {

}



// export function OtherResourceManipulation() {
//
// }