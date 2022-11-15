function convertScoreToGrade(score) {
    // your code here

    if      (score <= 100 && score >= 90)  return "A";
    else if (score <=  89 && score >= 80)  return "B";
    else if (score <=  79 && score >= 70)  return "C";
    else if (score <=  69 && score >= 60)  return "D";
    else if (score <=  59 && score >=  0)  return "F";
    else return "INVALID SCORE";

}

let output = convertScoreToGrade(91);
console.log(output); // --> 'A'

output = convertScoreToGrade(81);
console.log(output); // --> 'B'
output = convertScoreToGrade(71);
console.log(output); // --> 'C'
output = convertScoreToGrade(61);
console.log(output); // --> 'D'
output = convertScoreToGrade(51);
console.log(output); // --> 'F'
output = convertScoreToGrade(-10);
console.log(output); // --> 'Invalid'
output = convertScoreToGrade(1010);
console.log(output); // --> 'Invalid'
