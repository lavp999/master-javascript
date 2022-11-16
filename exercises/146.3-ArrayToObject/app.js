function transformEmployeeData(array) {
  // your code here
  let miObj = new Object();
  let miArray = [];

    array.forEach((nivel1, index) => {
      miObj = new Object();

      nivel1.forEach((nivel2, index) => {
        miObj[nivel2[0]] = nivel2[1];
      });

      miArray.push(miObj);
    });
  
  return miArray;
}


let output = transformEmployeeData([[['firstName', 'Joe'], ['lastName', 'Blow'], ['age', 42], ['role', 'clerk']],[['firstName', 'Mary'], ['lastName', 'Jenkins'], ['age', 36], ['role', 'manager']]]);
console.log(output); // [{firstName: 'Joe', lastName: 'Blow', age: 42, role: 'clerk'}, {firstName: 'Mary', lastName: 'Jenkins', age: 36, role: 'manager'}]