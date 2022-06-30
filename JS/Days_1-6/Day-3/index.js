const items = [];
function addItems(name, price) {
  const item = { name, price };
  items.push(item);
  return items;
}

function getTotal() {
  let total = 0;
  for (let i = 0; i < items.length; i++) {
    total += items[i].price;
  }
  const tax = total * 0.08;
  taxProcess(tax);
  return () => {
    return "$" + total + "tax is" + tax;
  };
}

function taxProcess(tax) {
  // ......do something
}

addItems("pants", 30);
addItems("shirt", 40);
addItems("shoes", 20);
addItems("cap", 50);

console.log(items);
console.log(getTotal()());
