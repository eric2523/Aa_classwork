// addNumbers

const readline = require("readline");

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function addNumbers(sum, numsLeft, completionCallback) {

    if (numsLeft === 0) {
        reader.close();
        return completionCallback(sum);
    }

    if (numsLeft > 0) {
        let newSum = sum;
        let leftover = numsLeft;
        
        reader.question("Enter a number", function(input) {
            newSum += parseInt(input);
            leftover -= 1;
            
            console.log(`${leftover} numbers left`);
            console.log(newSum);
            
            return addNumbers(newSum, leftover, completionCallback);
        }) 
    }
}

addNumbers(0, 3, sum => console.log(`Total Sum: ${sum}`));

// -----

// var readline = require('readline');
// var log = console.log;

// var rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// var recursiveAsyncReadLine = function () {
//   rl.question('Command: ', function (answer) {
//     if (answer == 'exit') //we need some base case, for recursion
//       return rl.close(); //closing RL and returning from function.
//     log('Got it! Your answer was: "', answer, '"');
//     recursiveAsyncReadLine(); //Calling this function again to ask new question
//   });
// };

// recursiveAsyncReadLine(); //we have to actually start our recursion somehow

