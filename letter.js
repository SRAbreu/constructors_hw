var fs = require("fs");

//constructor
function Letter(letter){
    this.value = letter; //Is the letter of the word
    this.bool = false; //Is if it has been guessed before
    this.get = function(){
        return this.value
    }
    this.guessLetter = function(char){
        this.bool = true;
        if(char === this.value) return true
        else{
            return false
        }
    }
}

module.exports = Letter;
