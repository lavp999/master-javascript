function isPersonOldEnoughToVote(person) {
  // Add your code after this line
  return (person.age >= 21);
}

let obj = {
  age: 16
};
let output = isPersonOldEnoughToDrive(obj);
console.log(output); // --> true