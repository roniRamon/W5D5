const readline = require("readline");

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Write this first.
function askIfGreaterThan(el1, el2, callback) {
  // Prompt user to tell us whether el1 > el2; pass true back to the
  reader.question(`tell us whether ${el1} > ${el2}`, (res) => {
    return (res === 'yes' ? callback(true) : callback(false));
  });
  // callback if true; else false.
}
// askIfGreaterThan(1,2, function(val){
//   console.log(val);
// });
// Once you're done testing askIfGreaterThan with dummy arguments, write this.
function innerBubbleSortLoop(arr, i, madeAnySwaps, outerBubbleSortLoop) {
  // Do an "async loop":
  // 1. If (i == arr.length - 1), call outerBubbleSortLoop, letting it
  if (i === (arr.length - 1))
  {
    outerBubbleSortLoop(madeAnySwaps);
    return;
  }

    askIfGreaterThan(arr[i], arr[i+1],
      function (isGreaterThan) {
        if (isGreaterThan) {
          const tmp = arr[i];
          arr[i] = arr[i + 1];
          arr[i + 1] = tmp;

          madeAnySwaps = true;
        }
        innerBubbleSortLoop(
          arr, i + 1, madeAnySwaps, outerBubbleSortLoop
        );
    });

  //    know whether any swap was made.
  // 2. Else, use `askIfGreaterThan` to compare `arr[i]` and `arr[i +
  //    1]`. Swap if necessary. Call `innerBubbleSortLoop` again to
  //    continue the inner loop. You'll want to increment i for the
  //    next call, and possibly switch madeAnySwaps if you did swap.
}

// innerBubbleSortLoop([4,2,5,7,1,3], 0, false, outerBubbleSortLoop)
//
// // Once you're done testing innerBubbleSortLoop, write outerBubbleSortLoop.
// // Once you're done testing outerBubbleSortLoop, write absurdBubbleSort.
//
function absurdBubbleSort(arr, sortCompletionCallback) {
  function outerBubbleSortLoop(madeAnySwaps) {
    // Begin an inner loop if you made any swaps. Otherwise, call
    if(madeAnySwaps)
    {
      innerBubbleSortLoop(arr, 0, false, outerBubbleSortLoop);
    }
    else
    {
      sortCompletionCallback(arr);
    }
    // `sortCompletionCallback`.
  }
  outerBubbleSortLoop(true);
  // Kick the first outer loop off, starting `madeAnySwaps` as true.
}

absurdBubbleSort([3, 2, 1], function (arr) {
  console.log("Sorted array: " + JSON.stringify(arr));
  reader.close();
});
