let obj = {
    a: 8,
    b: 2,
    c: 'montana'
}
function removeNumbersLargerThan(num, obj) {
    // your code here
    for(const elemento in obj){
        if (obj[elemento] > num){
            delete obj[elemento];
        }
    }
}

removeNumbersLargerThan(5, obj);
console.log(obj); // --> { b: 2, c: 'montana' }