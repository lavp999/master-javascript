// Write your function here
function areValidCredentials(nombre, pwd){
    return (nombre.length > 3) && (pwd.length > 7);
}

let output = areValidCredentials('Ritu', 'mylongpassword')
console.log(output); // --> verdadero