// const obj ={}
// const bookKeeping = { S1: 0, S2: 0, T1: 0 };

// let newInventoryCarModels = ["s1", "S1", "T1", "S2", "S1", "S2", "S1"];

// for (let i = 0; i < newInventoryCarModels.length; i++) {
//   const carModel = newInventoryCarModels[i].toUpperCase();
//   bookKeeping[carModel] += 1;
// }

const bookKeeping = {};

let newInventoryCarModels = ["s1", "S1", "T1", "S2", "S1", "S2", "S1"];

for (let i = 0; i < newInventoryCarModels.length; i++) {
  const carModel = newInventoryCarModels[i].toUpperCase();
  if (bookKeeping[carModel]) {
    bookKeeping[carModel] += 1;
    console.log(bookKeeping, "exist");
  } else {
    bookKeeping[carModel] = 1;
    console.log(bookKeeping, "doen't exist");
  }
}

console.log(bookKeeping);
