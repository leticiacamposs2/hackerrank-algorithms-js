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

// Complete the plusMinus function below.
function plusMinus(arr) {

    let positivo = 0;
    let negativo = 0;
    let zero = 0;

    arr.forEach(element => {
        if (Math.sign(element) === 1) {
            positivo += 1;
        } else if (Math.sign(element) === -1) {
            negativo += 1;
        } else {
            zero += 1;
        }
    });

    positivo = positivo / arr.length;
    negativo = negativo / arr.length;
    zero = zero / arr.length;

    console.log(`
        ${positivo.toFixed(6)}
        ${negativo.toFixed(6)}
        ${zero.toFixed(6)}
    `);
}

function main() {
    const n = parseInt(readLine(), 10);

    const arr = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));

    plusMinus(arr);
}
