function cicleShift(inputString) {
  // Define the alphabet and its length
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const alphabetLength = alphabet.length;

  // Replace each letter and number with its shifted value
  const shiftedString = inputString.replace(/[a-z0-9]/gi, function (match) {
    // Get the Unicode character code value of the current character
    let charCode = match.charCodeAt(0);

    // Check if the character is a letter
    if (/[a-z]/gi.test(match)) {
      // Apply the cyclic shift to the letter
      let shiftedCharCode = ((charCode - 97 + 1) % alphabetLength) + 97;
      // Convert the shifted code point back to a character and return it
      return String.fromCharCode(shiftedCharCode);
    }
    // Check if the character is a number
    else if (/[0-9]/.test(match)) {
      // Apply the cyclic shift to the number
      let shiftedCharCode = ((charCode - 48 + 1) % 10) + 48;
      // Convert the shifted code point back to a character and return it
      return String.fromCharCode(shiftedCharCode);
    }
    // For any other character, just return it unchanged
    else {
      return match;
    }
  });

  // Return the final shifted string
  return shiftedString;
}

const inpt1 = "aBc";
const result1 = cicleShift(inpt1);

const inpt2 = "xyz";
const result2 = cicleShift(inpt2);

const inpt3 = "aK89";
const result3 = cicleShift(inpt3);

const inpt4 = "A9B8c+*/7d6";
const result4 = cicleShift(inpt4);

console.log(result1);
console.log(result2);
console.log(result3);
console.log(result4);
