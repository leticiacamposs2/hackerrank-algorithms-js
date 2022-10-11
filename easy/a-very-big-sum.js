/**
 * [A Very Big Sum]
 * 
 * You are given an array of integers of size N. You need to print the sum of the elements in the array,
 * keeping in mind that some of those integers may be quite large.
 * 
 * Input Format
 * The first line of the input consists of an integer N. The next line contains N space-separated integers contained in the array.
 * 
 * Output Format
 * Print a single value equal to the sum of the elements in the array.
 * 
 * Constraints
 * 
 * Sample Input
 * 5
 * 1000000001 1000000002 1000000003 1000000004 1000000005
 * 
 * Output
 * 5000000015
 * 
 * Note:
 * The range of the 32-bit integer is (-2³¹) to (2³¹ -1) or [-2147483648,2147483647].
 * When we add several integer values, the resulting sum might exceed the above range. You might need to use long long int in C/C++ or long data type in Java to store such sums.
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

// Complete the aVeryBigSum function below.
function aVeryBigSum(ar) {

    let bigSum = 0;
    for (let i=0; i<ar.length; i++) {
        bigSum += ar[i];
    }
    return bigSum;

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const arCount = parseInt(readLine(), 10);

    const ar = readLine().split(' ').map(arTemp => parseInt(arTemp, 10));

    let result = aVeryBigSum(ar);

    ws.write(result + "\n");

    ws.end();
}
