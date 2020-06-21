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
 * Complete the timeConversion function below.
 */
function timeConversion(s) {
    /*
     * Write your code here.
     */

    let time = s.split(':')
    var min = time[1]
    if (s.match('PM')) {
        var hour = 12 + parseInt(time[0], 10)
        hour = hour == 24 ? 12 : hour;
        var sec = time[2].replace('PM', '')
    } else {
        var hour = time[0] == 12 ? '00' : time[0]
        var sec = time[2].replace('AM', '')
    }
    if (hour < 10) hour = hour;
    let newTime = hour + ':' + min + ':' + sec
    return newTime
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    let result = timeConversion(s);

    ws.write(result + "\n");

    ws.end();
}
