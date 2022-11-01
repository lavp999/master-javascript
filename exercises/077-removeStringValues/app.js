let obj = {
    name: 'Sam',
    age: 20
}

function removeStringValues(obj) {
    // your code here
    for(elemento in obj)
        if(typeof obj[elemento] == "string")
            delete obj[elemento];
}

removeStringValues(obj);
console.log(obj); // { age: 20 }
