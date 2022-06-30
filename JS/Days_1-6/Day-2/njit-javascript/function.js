// write a function that prints out helloworld

const persons = ["David", "John", "Victor", "Binal"];
const messages = [
  "Hello, good morning",
  "Hello, good afternoon",
  "Hello,good evening",
];

function greeting(msg, person) {
  console.log(msg, person);
}

function greetEveryone(msg, persons) {
  for (let i = 0; i < persons.length; i++) {
    greeting(msg, persons[i]);
  }
}

greetEveryone("Hello, good morning", persons);

// Hello,good evening person1
// Hello,good evening person2
// ...
