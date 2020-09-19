const readline = require("readline");

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Write this first.
function askIfGreaterThan(el1, el2, callback) {
  // Prompt user to tell us whether el1 > el2; pass true back to the
  // callback if true; else false.
    reader.question(`[yes/no]: Is ${el1} greater than ${el2}?`, function (input) {
        (input === "yes") ? callback(true) : callback(false); 
    })
}

// askIfGreaterThan(1, 2, function() {
//     console.log("done");
//     reader.close();
// })

// Once you're done testing askIfGreaterThan with dummy arguments, write this.
function innerBubbleSortLoop(arr, i, madeAnySwaps=false, outerBubbleSortLoop) {
  // Do an "async loop":
  // 1. If (i == arr.length - 1), call outerBubbleSortLoop, letting it
  //    know whether any swap was made.
  if (i == arr.length - 1) {
      return outerBubbleSortLoop(madeAnySwaps);
  } else {
      askIfGreaterThan(arr[i], arr[i+1], function(swaps) {
          if (swaps) {
            let temp = arr[i + 1];
            arr[i + 1] = arr[i];
            arr[i] = temp;
            madeAnySwaps = true;
          }
      })

      innerBubbleSortLoop(arr, i + 1, madeAnySwaps, outerBubbleSortLoop)
  }
  // 2. Else, use `askIfGreaterThan` to compare `arr[i]` and `arr[i +
  //    1]`. Swap if necessary. Call `innerBubbleSortLoop` again to
  //    continue the inner loop. You'll want to increment i for the
  //    next call, and possibly switch madeAnySwaps if you did swap.
  
}

// Once you're done testing innerBubbleSortLoop, write outerBubbleSortLoop.
// Once you're done testing outerBubbleSortLoop, write absurdBubbleSort.

function absurdBubbleSort(arr, sortCompletionCallback) {
  function outerBubbleSortLoop(madeAnySwaps) {
    // Begin an inner loop if you made any swaps. Otherwise, call
    // `sortCompletionCallback`.
  }

  // Kick the first outer loop off, starting `madeAnySwaps` as true.
}

// absurdBubbleSort([3, 2, 1], function(arr) {
//   console.log("Sorted array: " + JSON.stringify(arr));
//   reader.close();
// });