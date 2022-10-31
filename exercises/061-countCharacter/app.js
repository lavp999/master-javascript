function countCharacter(str, char) {
    // your code here
    let nVeces = 0;
    
    for(x = 0; x < str.length; x++){
        //if(str[x].toLowerCase == char.toLowerCase) nVeces++;
        if(str[x] == char) nVeces++;
    }
    return nVeces;
}


let output = countCharacter('I am a hacker', 'a');
console.log(output); // --> 3