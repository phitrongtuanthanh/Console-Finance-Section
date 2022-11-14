//Global not changing variables 
var monthNumber = 0;
var sum = 0;
var change = 0;
var previousMonth = 0;
var changeTotal = 0;
var average = 0;


//Loop inference
console.log('Financial Analysis');
console.log('----------------');

for (var index = 0; index < finances.length; index++) {
    monthNumber++;
    }
if (!(index<finances.length)) {
    console.log('Total months: ' + monthNumber);
    }

for (var index = 0; index<finances.length; index ++) {
    sum = sum + finances[index][1];
    }
if(!(index<finances.length)) {
    console.log('Total: ' + sum);
    }

for (var index = 0; index < finances.length; index++) {
    change = finances[index][1] - previousMonth;
    previousMonth = finances[index][1];
    changeTotal = changeTotal + change;
    }
if (!(index<finances.length)) {
    average = changeTotal / finances.length;
    console.log ('total average change: '+ average);
    }

    for (var index = 0; index < finances.length; index++) {
        var change = finances.map(x => finances[index++][1] - finances[index]);
        }
    if (!(index<finances.length)) {
        console.log (change);
        }
