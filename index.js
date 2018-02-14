//storing dependencies in vars
var request = require("request"); //do I need this?I think "prompt" is the one.
var prompt = require('prompt');
//fs package to handle read/write
var fs = require("fs");
var word = require("./Word");

//still missing:
// prompt and checking the letter
//what happens if it exists in the word, and
//what if a word contains many of one letter?
//how do you win
//how do you lose

let letterGuessed;
var wordBank = ["banana","peach",'apple'];
var guessLimit = 10;
function gererateRandomWord(){
    var x = Math.floor(Math.random() * Math.floor(wordBank.length));
    return wordBank[x]
}
var newWord = new word(gererateRandomWord());
//every time we get a guess
//newWord.guessWord(send guess)

console.log(newWord);

// Start the prompt
prompt.start();

// Get two properties from the user

prompt.get(['Guess a letter'], function (err, result) {

  // Log the results.

  letterGuessed = result['Guess a letter']
});
//ask for a letter to guess
    //newWord.guessWord()

// while(I guessed the word or I used all my guesses)

//ask for letter until the game ends?
    //to get a letter: newWord.guessWord(insert letter here)?
