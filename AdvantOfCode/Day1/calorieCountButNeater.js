const fs = require('fs');
const path = require('node:path');
fs.readFile(path.resolve(__dirname, './2022Day1input.txt'), 'utf8', (err, data) => {
    if (err){
        console.log(err);
        return; 
    }
    const input = data.split('\r\n\r\n').map(val => val.split('\r\n').map(Number).reduce((a, b) => a + b)).sort((a, b) => b - a);
    console.log('Part 1: ' + input[0]);
    console.log('Part 2: ' + (input[0] + input[1] + input[2]));
});