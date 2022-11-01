// Write your function 
function findMaxLengthOfThreeWords(p1, p2, p3){
    let masLarga = 0;
    let miArr = [];

    miArr.push(p1);
    miArr.push(p2);
    miArr.push(p3);
    miArr.forEach(element =>{
        if (element.length > masLarga)
            masLarga = element.length;
    });

    return masLarga;
}



let output = findMaxLengthOfThreeWords('a', 'be', 'see');
console.log(output); // --> 3