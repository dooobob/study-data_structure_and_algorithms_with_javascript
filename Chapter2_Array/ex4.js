// Create an object that stores individual letters in an array and has a function for displaying the letters as a single word.

function letters(word) {
    this.dataStore = word.split('');
    this.displayWord = displayWord;
}

function displayWord() {
    var word = '';
    for (var i in this.dataStore) {
        word += this.dataStore[i];
    }
    console.log('word: ' + word);
}

var fullstacker = new letters('fullstacker');
console.log(fullstacker.dataStore);

fullstacker.displayWord();