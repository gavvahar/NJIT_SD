const string1 = "cat";
const string2 = "-------cat";
const string3 = "&cat";
const string4 = "dogcat";

console.log(string2.match(/cat/));

const result1 = string3.match(/^[a-zA-Z0-9]+$/);
const result2 = string4.match(/^[a-zA-Z0-9]+$/);
console.log({ result1, result2 });
