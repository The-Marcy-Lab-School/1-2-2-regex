////////////////
// Test
////////////////

// try adding the i flag
const catRegEx = /cat/

catRegEx.test("the cat in the hat"); // Returns true
catRegEx.test("the dog in the hat"); // Returns false because no "cat"
catRegEx.test("the Cat in the hat"); // Returns false because of case sensitivity


////////////////
// Search
////////////////

let phrase = 'How now brown cow?'
phrase.search(/brow/);  // Returns 8
phrase.search(/ow/);    // Returns 1



////////////////
// Match
////////////////

phrase = 'My cat named caterpillar loves catnip.'

const firstMatch = phrase.match(/cat/);
console.log(firstMatch);

// Without the global flag, match will only return the first match
console.log(firstMatch.length); // Prints 1
console.log(firstMatch[0]);     // Prints 'cat'
console.log(firstMatch.index);  // Prints 3

// With the g flag...
const allMatches = phrase.match(/ow/g);
console.log(allMatches);        // Prints ['ow', 'ow', 'ow', 'ow'];
console.log(allMatches.length); // Prints 4

////////////////
// Match
////////////////

phrase = "my cat is named Catherine";

// Replace only the first "cat", regardless of case
// Try adding the g flag!
const newPhrase = phrase.replace(/cat/i, 'dog');

console.log(newPhrase); // Prints 'my dog is named Catherine'
