/**
 * [Simple Array Sum]
 * Given an array of N integers, can you find the sum of its elements?
 * 
 * Input Format
 * The first line contains an integer, N, denoting the size of the array.
 * The second line contains N space-separated integers representing the array's elements.
 * 
 * Output Format
 * Print the sum of the array's elements as a single integer.
 * 
 * Sample Input
 * 6
 * 1 2 3 4 10 11
 * 
 * Sample Output
 * 31
 * 
 * Explanation
 * We print the sum of the array's elements, which is: 1 + 2 + 3 + 4 + 10 + 11 = 31.
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
    inputString = inputString.trim().split('\n').map(str => str.trim());

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the simpleArraySum function below.
 */
function simpleArraySum(ar) {
    
    const sum = (accumulator, currentValue) => accumulator + currentValue;
    return console.log(ar.reduce(sum));
}


function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const arCount = parseInt(readLine(), 10);

    const ar = readLine().split(' ').map(arTemp => parseInt(arTemp, 10));

    let result = simpleArraySum(ar);

    ws.write(result + "\n");

    ws.end();
}
