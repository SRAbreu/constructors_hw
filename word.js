var letterFile = require('./Letter');

//constructor
function Word(word) {
    this.wordToGuess = word;
    this.letterObjects = [];
    this.setLettersArray = function () {
        for (var i = 0; i < this.wordToGuess.length; i++) {
            this.letterObjects.push(new letterFile(this.wordToGuess[i]))
        }
    }
    //
    this.getMeMyWord_Letter = function(){
        var fullWord = "";

        for(var z = 0; z < this.letterObjects.length ; z++){
            fullWord += this.letterObjects[z].get()
        }
        console.log(fullWord);
        //return fullWord
    }
    this.guessWord = function(char){
        console.log(char);
        return char

        //for loop that runs through the letterObjects array?
        //letterObjects[i].guessLetter(char) which returns boolean
        // for each it invokes the guessLetter() function?
    }
}
var x = new Word("banana");
console.log(x.letterObjects);
x.setLettersArray()
x.getMeMyWord_Letter()
console.log(x.letterObjects);

module.exports = Word;
