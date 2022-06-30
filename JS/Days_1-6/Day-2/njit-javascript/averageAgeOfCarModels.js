// golbal veriables
const newInventoryCarModels = ["S1", "T1", "S2", "S1", "S2", "S1"];
const newInventoryYearBuilt = [1922, 2011, 1975, 2002, 1965, 1951];
const carAgeBookKeeper = {};

let total = 0;
let curYear = 2022;
const numOfCars = newInventoryCarModels.length;

for (let i = 0; i < newInventoryYearBuilt.length; i++) {
  const age = curYear - newInventoryYearBuilt[i];
  total += age;
  const carModel = newInventoryCarModels[i];
  console.log({ carModel, age });
  carAgeBookKeeper[carModel + "-" + i] = age;
}
const average = total / numOfCars;

carAgeBookKeeper["total"] = total;
carAgeBookKeeper["average"] = average;

console.log(carAgeBookKeeper);
