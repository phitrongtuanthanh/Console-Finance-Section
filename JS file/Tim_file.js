//Global not changing variables 
var monthNumber = 0;
var sum = 0;
var change = 0;
var changeTotal = 0;
var average = 0;
var GIncrease = -Infinity;
var GIMonth = '';
var GDecrease = Infinity;
var GDMonth = '';

//Loop inference
//Intro
console.log('Financial Analysis');
console.log('----------------');

//Total months calculation
for (var index = 0; index < finances.length; index++) {
    monthNumber++;
    }

console.log(`Total Months: ${monthNumber}`);
    
//Total rev calculation
for (var index = 0; index<finances.length; index++) {
    sum = sum + finances[index][1];
    }

console.log(`Total: $(${sum})`);

//Average change calculation
var previousMonth = 0;

for (var index = 0; index < finances.length; index++) {
    change = finances[index][1] - previousMonth;
    previousMonth = finances[index][1];
    changeTotal = changeTotal + change;
    }

average = changeTotal / finances.length;
console.log (`Average Change: $(${average})`);


// The greatest increase in profits calculation
var previousMonth = 0;

for (index = 0; index < finances.length; index++) {
  var currentChange = finances[index][1] - previousMonth;
  previousMonth = finances[index][1];
  if (GIncrease < currentChange) {
    GIncrease = currentChange;
    GIMonth = finances[index][0];
    }
}

console.log(`Greatest Increase in Profits: ${GIMonth} $(${GIncrease})`);

// The greatest decrease in profits calculation

var previousMonth = 0;

for (index = 0; index < finances.length; index++) {
    var currentChange = finances[index][1] - previousMonth;
    previousMonth = finances[index][1];
    if (GDecrease > currentChange) {
      GDecrease = currentChange;
      GDMonth = finances[index][0];
      }
  }
  
  console.log(`Greatest Increase in Profits: ${GDMonth} $(${GDecrease})`);