//------------------------Task 1---------------------

function removeSpaces(text) {
    return text.replace(/^\s+|\s+$/g, '');
}

let textData = " Hello, world! ";
let trimmedLine = removeSpaces(textData);
console.log(trimmedLine); // Output: "Hello, world!"
//We can also specify text directly in function parameter:
console.log(removeSpaces("   Here we go!  ")); //Output: "Here we go!"

//--------------------------Task 2----------------------

function findCapitalWords(sentence) {
    return sentence.match(/\b[A-Z][a-z]*\b/g) || [];
}

let sentence = "This is Second task From Seventh's home Work";
let capitalWords = findCapitalWords(sentence);
console.log(capitalWords); // Output: ['This', 'Second', 'From', 'Seventh', 'Work']

//We don't need to scpecifically declare any variables:
console.log(findCapitalWords("no capital letter here")); // Output: []

//--------------------------Task 3-----------------------------

function getLetterCount(text) {
    const letterCount = {};
    const lettersOnly = text.replace(/[^a-zA-Z]/g, '').toLowerCase();
    for (let letter of lettersOnly) {
        if (letterCount[letter]) {
            letterCount[letter]++;
        } else {
            letterCount[letter] = 1;
        }
    }
    return letterCount;
}

const text = "Hello, World!";
console.log(getLetterCount(text)); // Output: { h: 1, e: 1, l: 3, o: 2, w: 1, r: 1, d: 1 }

//--------------------------------Task 4----------------------------------

