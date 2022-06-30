const meats = ["beef", "lamb", "pork", "chicken", "baffalo", "fish"];
const vegetables = ["kale", "cucumber", "tomato", "lettuce"];
const desserts = [
  "cheese cake",
  "keylime pie",
  "ice cream",
  "pecan pie",
  "apple pie",
];

const lastMeat = meats.pop();
const lastVegetable = vegetables.pop();
const randomDessert = desserts[4];
console.log(meats, "after pop");
console.log(vegetables, "after pop");
const mondayMenu = meats.concat(vegetables);
console.log(randomDessert);
mondayMenu.push(randomDessert);
console.log(mondayMenu);
