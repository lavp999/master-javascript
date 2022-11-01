let obj = {
    a: 2,
    b: 'remaining',
    c: 4
};
function removeNumberValues(obj) {
    // your code here
    for(elemento in obj)
        if(!isNaN(obj[elemento]))
            delete obj[elemento];    
}

removeNumberValues(obj);
console.log(obj); // --> { b: 'remaining' }