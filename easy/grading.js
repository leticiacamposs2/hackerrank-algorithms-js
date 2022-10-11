/**
 * [Grading Students]
 * 
 * HackerLand University has the following grading policy:
 * - Every student receives a in the inclusive range from 0 to 100.
 * - Any gran less than 40 is a failing grade.
 * 
 * Sam is a professor at the university and likes to round each student's grade according to these rules:
 * - If the difference between the and the grade next multiple of 5 is less than 3, round grade up to the next multiple of 5.
 * - If the value of is less than , no rounding occurs as the result will still be a failing grade.
 * 
 * For example, grade = 84 will be rounded to 85 but grade = 29 will not be rounded because the rounding would result in a number that is less than 40.
 * Given the initial value of grade for each of Sam's n students, write code to automate the rounding process. For each grade, round it according to the rules above and print the result on a new line.
 * 
 * Input Format
 * The first line contains a single integer denoting n (the number of students).
 * Each line i of the n subsequent lines contains a single integer, grade i, denoting student i's grade.
 * 
 * Constraints
 * - 1 <= n <= 60
 * - 0 <= grade i <= 100
 * 
 * Output Format
 * For each of the grade i, of the n grades, print the rounded grade on a new line.
 * 
 * Sample Input 0
 * 4
 * 73
 * 67
 * 38
 * 33
 * 
 * Sample Output 0
 * 75
 * 67
 * 40
 * 33
 * 
 * Explanation 0
 * 
 * 1. Student 1 received a 73, and the next multiple 5 of from is 73 is 75. Since 75 - 73 < 3, the student's grade is rounded to 75.
 * 2. Student 2 received a 67, and the next multiple 5 of from is 67 is 70. Since 70 - 67 = 3, the grade will not be modified and the student's final grade is 67.
 * 3. Student 3 received a 38, and the next multiple 5 of from is 38 is 50. Since 40 - 38 < 3, the student's grade will be rounded to 40.
 * 4. Student 4 received a grade below 38, so the grade will not be modified and the student's final grade is 33.
 */

'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function (inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function () {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'gradingStudents' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY grades as parameter.
 */

function gradingStudents(grades) {
    let finalGrade = [];

    for (let i = 0; i < grades.length; i++) {
        if (grades[i] % 5 > 2 && !(grades[i] < 38)) {
            finalGrade.push(grades[i] + (5 - grades[i] % 5));
        } else {
            finalGrade.push(grades[i]);
        }
    }

    return finalGrade;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const gradesCount = parseInt(readLine().trim(), 10);

    let grades = [];

    for (let i = 0; i < gradesCount; i++) {
        const gradesItem = parseInt(readLine().trim(), 10);
        grades.push(gradesItem);
    }

    const result = gradingStudents(grades);

    ws.write(result.join('\n') + '\n');

    ws.end();
}
