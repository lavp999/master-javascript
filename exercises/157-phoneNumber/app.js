function PhoneNumberFormatter(numbers) {
  this.numbers = numbers;
}

PhoneNumberFormatter.prototype.render = function() {
  let string = '';
  // your code here
  return string;
};

PhoneNumberFormatter.prototype.getAreaCode = function() {
  // your code here
};

PhoneNumberFormatter.prototype.getExchangeCode = function() {
  // your code here
};

PhoneNumberFormatter.prototype.getLineNumber = function() {
  // your code here
};

PhoneNumberFormatter.prototype.parenthesize = function(string) {
  return '(' + string + ')';
};

PhoneNumberFormatter.prototype.slice = function(start, end) {
  return this.numbers.slice(start, end).join('');
};



let output = PhoneNumberFormatter([6, 5, 0, 8, 3, 5, 9, 1, 7, 2]).render();
console.log(output, (ouput == "(650) 835-9172" ? "Ok" : "KO")); // "(650) 835-9172"