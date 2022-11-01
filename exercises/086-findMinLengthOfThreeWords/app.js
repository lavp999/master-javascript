// Write your function here
function findMinLengthOfThreeWords(p1, p2, p3){
    let masCorta = 999;
    let miArr = [];

    miArr.push(p1);
    miArr.push(p2);
    miArr.push(p3);
    miArr.forEach(element =>{
        if (element.length < masCorta)
            masCorta = element.length;
    });

    return masCorta;
}


let output = findMinLengthOfThreeWords('a', 'be', 'see');
console.log(output); // --> 1