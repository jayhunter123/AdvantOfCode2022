const fs = require('fs');
const path = require('node:path');

fs.readFile(path.resolve(__dirname, './2022Day1input.txt'), 'utf8', (err, data) => {
    if (err){
        console.log(err);
        return;
    }

    console.log(data.length);

    const input = data.split('\r\n\r\n')
    console.log(input.length);

    const sum = [];
    for (let i = 0; i < input.length; i++){
            //console.log('blank line');
            //console.log(input[i]);
            sum[i] = input[i].split('\r\n').map(Number).reduce((a, b) => a + b);
            //console.log(sum[i]);
        }

        sum.sort((a, b) => b - a);

        console.log('Part 1: ' + sum[0]);
        console.log('Part 2: ' + (sum[0] + sum[1] + sum[2]));
});







