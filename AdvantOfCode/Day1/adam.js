const fs = require("fs")
var text = fs.readFileSync("input.txt", "utf-8");
var textArray = text.split("\n");
var numberArray = textArray.map(str => {
    return Number(str);
});
var max = 0;
var runningTotal = 0;
for (let i = 0; i < numberArray.length; i++) {
    if (numberArray[i] > 0) {
        runningTotal += numberArray[i];
    } else {
        if (runningTotal > max) {
            max = runningTotal;
        }
        runningTotal = 0;
    }
}
console.log(max);