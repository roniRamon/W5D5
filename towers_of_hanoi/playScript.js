
const newGame = require('./game.js');

let test = new newGame;
test.run(function(){
  console.log("Do you want to play again?");
});
