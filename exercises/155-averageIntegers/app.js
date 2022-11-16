function average(array_of_numbers) {
  // process array of numbers
    const suma = sum(array_of_numbers);

    return (suma / array_of_numbers.length);
  
}

function sum(numbers) {
  let suma = 0;
    numbers.forEach(valor => suma += valor); 
    return suma;
}

let output = average([3, 3, 5, 5, 5, 3]);
console.log(output); //