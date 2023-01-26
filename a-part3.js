function cicleShift(inputString) {
  //-------------START: BASIC DEFINITIONS-----------------
  // To organize the letters and the numbers
  const letters = "abcdefghijklmnopqrstuvwxyz";

  // These will be used to make the cicle,
  // they are the length of the letters and
  // the digits, respectively
  let lettersNorm = 26;
  //-------------END: BASIC DEFINITIONS-----------------

  // --Start: newString--
  var newString = inputString.replace(/[a-z0-9]/gi, function (match) {
    if (match.match(/[a-z]/gi)) {
      let lowerMatch = match.toLowerCase();
      let index = letters.indexOf(lowerMatch);
      let output = letters[(index + 1) % lettersNorm];

      if (match === lowerMatch) {
        //*letter is lowercase*
        return output.toUpperCase();
      } else {
        //*letter is uppercase*
        return output.toLowerCase();
      }
    } else if (match.match(/[0-9]/)) {
      if (match === "9") {
        return "0";
      } else {
        return String(Number(match) + 1);
      }
    }
  });
  // ---End: newString---

  return newString;
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
