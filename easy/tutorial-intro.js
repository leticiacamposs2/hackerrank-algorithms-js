/**
 * [Intro to Tutorial Challenges]
 * 
 * The challenges will describe some topic and then ask you to code a solution. As you progress through the challenges, you will learn some important concepts in algorithms. In each challenge, you will receive input on STDIN and you will need to print the correct output to STDOUT.
 * For many challenges, helper methods (like an array) will be provided for you to process the input into a useful format. You can use these methods to get started with your program, or you can write your own input methods if you want. Your code just needs to print the right output to each test case.
 * 
 * Sample Challenge
 * This is a simple challenge to get things started. Given a sorted array (ar) and a number (V), can you print the index location of V in the array?
 * 
 * Input Format
 * There will be three lines of input:
 * - V - the value that has to be searched.
 * - n - the size of the array.
 * - ar - n numbers that make up the array.
 *
 * Output Format
 * Output the index of V in the array.
 * The next section describes the constraints and ranges of the input. You should check this section to know the range of the input.
 * 
 * Constraints
 * - It is guaranteed that V will occur in ar exactly once.
 * This "sample" shows the first input test case. It is often useful to go through the sample to understand a challenge.
 * 
 * Sample Input
 * 4
 * 6
 * 1 4 5 7 9 12
 * 
 * Sample Output
 * 1
 * 
 * Explanation
 * V = 4. The value 4 is the 2nd element in the array, but its index is 1 since array indices start from 0, so the answer is 1.
 */

'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the introTutorial function below.
function introTutorial(V, arr) {
    return arr.indexOf(V);
}


function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const V = parseInt(readLine(), 10);

    const n = parseInt(readLine(), 10);

    const arr = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));

    let result = introTutorial(V, arr);

    ws.write(result + "\n");

    ws.end();
}
