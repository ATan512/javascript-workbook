'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


function pigLatin(word) {

  //get input/word from user
  //create variable to reformat word
  //create array in order to cycle through
  //from the input, check to see if first letter is consonant or vowel
  //use if statement - if vowel add "yay" to the end
  // if consonant, use an array to cycle through until you get to a vowel (for loop function)
  //take those letters that you cycled through and add them to the end using .split and .join methods
  //use .trim method or .toLower method to clean up user's input
  // shift method is for first letter, pop is for last letter

  const cleanedUpInput = word.toLower().trim(); //take user's input and remove spaces and make it all lowercase
  const letterArray = [cleanedUpInput.split()]; //turn the cleaned up input into an array so we can check the letters
  const vowels = ["a", "e", "i", "o", "u"];
  if (letterArray[0].includes(vowels)) { //check to see if first letter is a vowel
    let formattedStr = letterArray + "yay";
    console.log(formattedStr);
  } else if (!letterArray[0].includes(vowels))
    // const lastIndex = letterArray.length - 1;
    // for (let index = lastIndex;)

    const moveLetter = letterArray[0];
  const rearrange = formattedStr.shift(); //remove first letter
  const newWord = rearrange + moveLetter; //add removed letter to the end
}
}


function getPrompt() {
  rl.question('word ', (answer) => {
    console.log(pigLatin(answer));
    getPrompt();
  });
}

// Tests

if (typeof describe === 'function') {

  describe('#pigLatin()', () => {
    it('should translate a simple word', () => {
      assert.equal(pigLatin('car'), 'arcay');
      assert.equal(pigLatin('dog'), 'ogday');
    });
    it('should translate a complex word', () => {
      assert.equal(pigLatin('create'), 'eatecray');
      assert.equal(pigLatin('valley'), 'alleyvay');
    });
    it('should attach "yay" if word begins with vowel', () => {
      assert.equal(pigLatin('egg'), 'eggyay');
      assert.equal(pigLatin('emission'), 'emissionyay');
    });
    it('should lowercase and trim word before translation', () => {
      assert.equal(pigLatin('HeLlO '), 'ellohay');
      assert.equal(pigLatin(' RoCkEt'), 'ocketray');
    });
  });
} else {

  getPrompt();

}