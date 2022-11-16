let customerData = {
  'Joe': {
    visits: 1
  },
  'Carol': {
    visits: 2
  },
  'Howard': {
    visits: 3
  },
  'Carrie': {
    visits: 4
  }
};

function greetCustomer(firstName) {
  let greeting = '';
  // your code here
  let veces = 0;

  for (const propiedad in customerData) {

    if(firstName = propiedad)  veces = customerData[propiedad]["visits"];
    console.log(firstName, propiedad, veces);
  }
  if (veces == 0){
    greeting = 'Welcome! Is this your first time?';
  }else if (veces == 1){
    greeting = `Welcome back, ${firstName}! We're glad you liked us the first time!`;
  }else{
    greeting = `Welcome back, ${firstName}! So glad to see you again!`;
  }
	
  return greeting;
}

let output = greetCustomer('Terrance');
console.log(output); // --> 'Welcome! Is this your first time?'

output = greetCustomer('Joe');
console.log(output); // --> 'Welcome back, Joe! We're glad you liked us the first time!'

output = greetCustomer('Carol');
console.log(output); // --> 'Welcome back, Carol! So glad to see you again!'

output = greetCustomer('Howard');
console.log(output);

output = greetCustomer('Carrie');
console.log(output);