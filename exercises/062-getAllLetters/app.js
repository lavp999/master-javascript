function getAllLetters(str) {
    // your code here
    let miArr = [];

    for(x = 0; x < str.length; x++){
        miArr.push(str[x]);
    }

    return miArr;
}

let output = getAllLetters('Radagast');
console.log(output); // --> ['R', 'a', 'd', 'a', 'g', 'a', 's', 't']