/**
 * [Staircase]
 * 
 * Consider a staircase of size n = 4:
 * 
 * #
 * ##
 * ###
 * ####
 * 
 * Observe that its base and height are both equal to n, and the image is drawn using # symbols and spaces.
 * The last line is not preceded by any spaces.
 * 
 * Write a program that prints a staircase of size n.
 * 
 * Input Format
 * A single integer, n, denoting the size of the staircase.
 *  
 * Output Format
 * Print a staircase of size n using # symbols and spaces.
 * Note: The last line must have spaces in it.
 * 
 * Sample Input
 * 6
 * 
 * Sample Output
 * #
 * ##
 * ###
 * ####
 * #####
 * ######
 * 
 * Explanation
 * The staircase is right-aligned, composed of # symbols and spaces, and has a height and width of n = 6.
 */

'use strict';

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

// Complete the staircase function below.
function staircase(n) {

    let stair = '#';
    for (let i = 0; i < n; i++) {
        console.log(stair.padStart(n, ' '));
        stair += '#';

    }

}

function main() {
    const n = parseInt(readLine(), 10);

    staircase(n);
}
