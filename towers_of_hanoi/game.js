const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

class Game {

  constructor () {
    this.stack = [[3,2,1],[],[]];
  }

  promptMove () {
    let fromTower, toTower;
    if (this.isWon()){
      return;
    }

    console.log(this.stack);
    reader.question("Which tower would you like to select?: ", (res) => {
      fromTower = res;

      reader.question("Which tower do you want to move to?: ", (res2) => {
        toTower = res2;

        if(this.isValidMove(fromTower, toTower)) {

          if (this.move(fromTower, toTower) ) {
            this.print();
            this.promptMove();
          }
        }

      });
    });
  }

  isValidMove (fromTower, toTower) {
    if (this.stack[fromTower - 1].length === 0) {
      return false;
    }

    if (this.stack[toTower - 1].length !== 0){
      if (this.stack[fromTower - 1][this.stack[fromTower - 1].length - 1]
         < this.stack[toTower - 1][this.stack[toTower - 1].length - 1]) {
        return true;
      } else {
        return false;
      }
    } else {
      return true;
    }
  }

  move(fromTower, toTower) {
    if (this.isValidMove(fromTower, toTower)) {
      let val = this.stack[fromTower - 1].pop();
      this.stack[toTower - 1].push(val);
      return true;
    }
    return false;
  }

  print(){
    console.log(JSON.stringify(this.stack));
  }

  isWon(){
    if(this.stack[1].length === 3 || this.stack[2].length === 3)
    {
      return true;
    }
    return false;
  }

  run(completionCallback) {
    
      this.promptMove();
      //get move from current player
      if(this.isWon())
      {
       console.log("yay.... you Win!");
       completionCallback();
      }

  }
}


// module.exports = Game;
let test = new Game;
// test.promptMove();
test.run(function(){
  reader.close();
  console.log("Do you want to play again?");
});
