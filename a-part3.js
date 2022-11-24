function cicleShift(inputString) {
  //-------------START: BASIC DEFINITIONS-----------------
  // To organize the letters and the numbers
  const letters = "abcdefghijklmnopqrstuvwxyz";
  const digits = "0123456789";

  // These will be used to make the cicle,
  // they are the length of the letters and
  // the digits, respectively
  let lettersNorm = 26;
  let digitsNorm = 10;

  // Variable in which the output will be saved
  let output = "";
  //-------------END: BASIC DEFINITIONS-----------------

  //-------------START: ITERATION-----------------
  // This for iterares over the elements of the input
  for (let character of inputString) {
    // A character in the input have 4 possible options
    // 1) It is a capital letter.
    // 2) It is a lower case letter.
    // 3) it is a digit.
    // 4) It is non of the previous 3.
    // I have to say that 4) was not in the problem, but I think
    // it is important to consider characters such as */?.&%$#,
    // this, in order to make the code work in more situations.

    // 1) Is the character a capital letter?
    if (/[A-Z]/.test(character)) {
      let index = letters.indexOf(character.toLowerCase());
      output += letters[(index + 1) % lettersNorm].toUpperCase();
    }
    // 2) Is the character a lower case letter?
    else if (/[a-z]/.test(character)) {
      let index = letters.indexOf(character);
      output += letters[(index + 1) % lettersNorm];
    }
    // 3) Is the character a digit?
    else if (/[0-9]/.test(character)) {
      let index = digits.indexOf(character);
      output += digits[(index + 1) % digitsNorm];
    }
    // 4) Is the character something else?
    else {
      output += character;
    }
  }
  //-------------END: ITERATION-----------------

  //Note:
  // The structure: -letters[(index + 1) % lettersNorm]- makes it possible
  // to make the cicle, for example, for the letter -z-, -indexOf(z) = 25-,
  // thus it is not possible to obtain -letters[25 + 1]- because
  // -letters[26]- does not exists, neverthless,
  // 26 % lettersNorm = 26%26 = 0, and -letter[0] = a-.
  // by using -%- it is possible to make the cicle.

  return output;
}

const inpt1 = "aBc";
const inpt2 = "xyz";
const inpt3 = "aK89";
const inpt4 = "A9B8c+*/7d6";

const result1 = cicleShift(inpt1);
const result2 = cicleShift(inpt2);
const result3 = cicleShift(inpt3);
const result4 = cicleShift(inpt4);

console.log(result1);
console.log(result2);
console.log(result3);
console.log(result4);
