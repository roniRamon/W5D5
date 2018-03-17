const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function addNumbers(sum, numsLeft, completionCallback) {

 if  (numsLeft > 0) {
    reader.question("Please Enter a Number: ", (res) => {
      numsLeft -= 1;

      sum += parseInt(res);
      console.log(sum);

      addNumbers(sum, numsLeft, completionCallback);

    });
  } else if(numsLeft === 0)
  {
    completionCallback(sum);
  }

}

addNumbers(0, 3, sum => console.log(`Total Sum: ${sum}`));
