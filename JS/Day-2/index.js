let newInventoryCarModels = ["S1", "T1", "S2", "S1", "S2", "S1"];
let newInventoryCarTypes = [
  "StockCar",
  "Refrigerator",
  "Lorrie",
  "Lorrie",
  "Lorrie",
];
let carCountTotal = 0;
let s1 = 0;
for (let i = 0; i < newInventoryCarModels.length; i++) {
  carCountTotal++;
  if (newInventoryCarModels[i] === "S1") {
    s1++;
  }
}
console.log(carCountTotal);
console.log(s1);
let newInventoryCarYearBuilt = [1922, 2011, 1975, 2002, 1965, 1951];
