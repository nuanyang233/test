// 1. Provide the sum of the following variables

var num10 = 10;
var string8 = '8';
var one = 1;

// Solution: convert string8 to number then sum
var sum = num10 + Number(string8) + one;
console.log(sum); // 19


// 2. Write a loop that will log only numbers divisible by 3 between 20 - 100

for (var i = 20; i <= 100; i++) {
  if (i % 3 === 0) {
    console.log(i);
  }
}


// 3. Find the class average given the following test scores

var scores = [88, 84, 100, 92, 70, 76, 76, 84, 86, 98];

var total = 0;
for (var j = 0; j < scores.length; j++) {
  total += scores[j];
}
var average = total / scores.length;
console.log(average); // 85.4
