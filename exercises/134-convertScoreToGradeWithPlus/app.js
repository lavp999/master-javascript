function convertScoreToGradeWithPlusAndMinus(score) {
    // your code here  por aprovechar el otro código
    const signo = (score%10>=0 && score%10<=2 ? "-" : (score%10>=8 && score%10<=9 ? "+" : ""));

    if      (score <= 100 && score >= 90)  return "A"+signo;
    else if (score <=  89 && score >= 80)  return "B"+signo;
    else if (score <=  79 && score >= 70)  return "C"+signo;
    else if (score <=  69 && score >= 60)  return "D"+signo;
    else if (score <=  59 && score >=  0)  return "F";
    else return "INVALID SCORE";
}

let output = convertScoreToGradeWithPlusAndMinus(91);
console.log(output); // --> 'A'

output = convertScoreToGradeWithPlusAndMinus(82);
console.log(output); // --> 'B'
output = convertScoreToGradeWithPlusAndMinus(73);
console.log(output); // --> 'C'
output = convertScoreToGradeWithPlusAndMinus(78);
console.log(output); // --> 'C'
output = convertScoreToGradeWithPlusAndMinus(68);
console.log(output); // --> 'D'
output = convertScoreToGradeWithPlusAndMinus(59);
console.log(output); // --> 'F'
output = convertScoreToGradeWithPlusAndMinus(-10);
console.log(output); // --> 'Invalid'
output = convertScoreToGradeWithPlusAndMinus(1010);
console.log(output); // --> 'Invalid'