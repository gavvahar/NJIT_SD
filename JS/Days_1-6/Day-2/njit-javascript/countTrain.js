let newInventoryCarModels = ["S1", "T1", "S2", "S1", "S2", "S1"];
let newInventoryCarTypes = [
  "StockCar",
  "Refrigerator",
  "StockCar",
  "Lorrie",
  "Lorrie",
  "Lorrie",
];
let newInventoryYearBuilt = [1922, 2011, 1975, 2002, 1965, 1951];

// There are 3 S1s in the array newInventoryCarModels

let s1Count = 0;
for (let i = 0; i < newInventoryCarModels.length; i++) {
  if (newInventoryCarModels[i].toLocaleUpperCase() === "S1") s1Count += 1;
}

console.log(`There are ${s1Count} S1 models in the inventory`);

let testString = "s1";
console.log(testString.toUpperCase());
