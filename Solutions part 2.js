// EXERCICE A
// A) Date format <Month-string> <##day>, <####year>
// EXAMPLES:
// -	September 29, 1972
// -	February 99, 0001
// -	June 04, 3000
// Solution: As it was done before, it is important to divide the problem in parts:
// *) MONTH- Is a variable number of letters: “[a-zA-Z]+”
// *) SPACE- \s
// *) DAY- 2 digits:  \d{2}
// *) COMMA: “,”
// *) SPACE- \s
// *) YEAR: 4 digits:  \d{4}
// Thus, the regex that match the date format is:
// REGEX = [a-zA-Z]+\s\d{2},\s\d{4}
// EXAMPLE:
let regexA = /[a-zA-Z]+\s\d{2},\s\d{4}/g;
let inputAa = "September 29, 1972";
let inputAb = "February 99, 0001";
let inputAc = "June 04, 3000";

let matchAa = inputAa.match(regexA);
let matchAb = inputAb.match(regexA);
let matchAc = inputAc.match(regexA);

// console.log(matchAa);
// console.log(matchAb);
// console.log(matchAc);

// EXERCICE B
// B) A letter followed OR preceded by a number
// EXAMPLES:
// - A52
// - d747
// - 27X
// - v2
// Solution: Again, let’s divided the problem in parts
// *) FOLLOWED: A letter followed by a number: [a-zA-Z]\d+
// *) PRECEDED: A letter preceded  by a number: \d+[a-zA-Z]
// *) OR: To match only one case: (\d+[a-zA-Z]|[a-zA-Z]\d+)
// Thus, the regex that solves the problem is:
// REGEX: (\d+[a-zA-Z]|[a-zA-Z]\d+)
// EXAMPLE:
let regexB = /(\d+[a-zA-Z]|[a-zA-Z]\d+)/g;
let inputBa = "A52";
let inputBb = "d747";
let inputBc = "27X";
let inputBd = "V2";

let matchBa = inputBa.match(regexB);
let matchBb = inputBb.match(regexB);
let matchBc = inputBc.match(regexB);
let matchBd = inputBd.match(regexB);

// console.log(matchBa);
// console.log(matchBb);
// console.log(matchBc);
// console.log(matchBd);

// EXERCICE C
// C) txt, java, and cpp files with names consisting of only letters
// EXAMPLES:
// - test.java
// - program.cpp
// - newReport.txt
// Solution: The structure of this names is:
// *) A varible number of letters: [a-zA-Z]+
// *) A dot: \.
// *) java, cpp or txt: (java|cpp|txt)
// Thus, the regex that solves this problem is:
// REGEX: [a-zA-Z]+\.(java|cpp|txt)
// EXAMPLE:
let regexC = /[a-zA-Z]+\.(java|cpp|txt)/g;
let inputCa = "test.java";
let inputCb = "program.cpp";
let inputCc = "newReport.txt";

let matchCa = inputCa.match(regexC);
let matchCb = inputCb.match(regexC);
let matchCc = inputCc.match(regexC);

// console.log(matchCa);
// console.log(matchCb);
// console.log(matchCc);

// EXERCICE D
// D) A 5 character palindrome
// EXAMPLES:
// - abcba
// - 12321
// - _1a1_
// Solution: To solve this I used capturing groups as follows
// *) WORD REPRESENTATION: The desired match is a 5 character word, that
//    can be represented as: LETTER1-LETTER2-LETTER3-LETTER4-LETTER5
// *) PALINDROME REPRESENTATION: Because the 5-character word is also a
//    palindrome, it has the structure: LETTR1- LETTR2-LETTR3-LETTR1-LETTR2
// *) REGEX: To match that word, the regex will look like:
// CaGu = capturing group
// (CaGu1) (CaGu2) (CaGu3) (Same as CaGu1) (Same as CaGu2)
// The last 2 capturing groups (CaGu1) and (CaGu2), because we are telling
// the regex engine: “In position 4 and position 5 look for the same you
// matched in position 1 and position 2 respectively”.
// In regex terminology:
// *)	(CaGu1), (CaGu2), (CaGu3)  => (.{1,}) “any single character”.
// *)	(Same as CaGu1) => \1 “Capturing group 1”
// *)	(Same as CaGu2) => \2 “Capturing group 2”
// Thus, the regex that solves this problem is:
// REGEX: (.{1,}) (.{1,}) (.{1,}) \2\1
// EXAMPLE:
let regexD = /(.{1,})(.{1,})(.{1,})\2\1/g;
let inputDa = "abcba";
let inputDb = "12321";
let inputDc = "_1a1_";

let matchDa = inputDa.match(regexD);
let matchDb = inputDb.match(regexD);
let matchDc = inputDc.match(regexD);

// console.log(matchDa);
// console.log(matchDb);
// console.log(matchDc);

// EXERCICE E
// E) All words that consist of letters from b to y only
// EXAMPLE:
// - input: “Bee zapp Crow Eagle Zorro  mouse Ape  you”
// - output: [“Bee”,”Crow”,”mouse”,”you”]
// Solution: This problem needs to make 2 considerations:
// *) WORD POSITION: There 3 positions in which the word can be located:
// *) At the beginning of the string, which is matched by: “^”
// *) In the middle: which it is matched by: \b (word boundary)
// *) At the end, which is matched by: “$”
// To indicate thar the word could be in any of this positions, the regex:
// *) Should begin with: (^|\b)
// *) Should end with: (\b|$)
// *) LETTERS: To match the letters from b to y, I used the regex: [b-yB-Y]
// *) To match it as a word [b-yB-Y]+
// Thus, the regex that solves this problem is:
// REGEX: (^|\b)[b-yB-Y](\b|$)
// EXAMPLE:
let regexE = /(^|\b)[b-yB-Y]+(\b|$)/g;
let inputE = "Bee zapp Crow Eagle Zorro mouse Ape you";

let matchE = inputE.match(regexE);

// console.log(matchE);

// EXERCICE F
// F) txt, java, and cpp files with names consisting of only letters
// EXAMPLES:
// - test.java
// - program.cpp
// - newReport.txt
// Solution: The structure of these names is:
// *) A varible number of letters: [a-zA-Z]+
// *) A dot: \.
// *) java, cpp or txt: (java|cpp|txt)
// Thus, the regex that solves this problem is:
// REGEX: [a-zA-Z]+\.(java|cpp|txt)
// EXAMPLE:
let regexF = /[a-zA-Z]+\.(java|cpp|txt)/g;
let inputFa = "test.java";
let inputFb = "program.cpp";
let inputFc = "newReport.txt";

let matchFa = inputFa.match(regexF);
let matchFb = inputFb.match(regexF);
let matchFc = inputFc.match(regexF);

// console.log(matchFa);
// console.log(matchFb);
// console.log(matchFc);
// console.log(matchFc);

// EXERCICE G
// G)	All the non nested tag elements in a string
// EXAMPLES:
// - input:	“Is <b>4 < -1/12</b> true? The <b>answer</b> will <em>surprise</em> you.”
// - output: <b> 4 < -1/12</b>, <b>answer</b>, <em>surprise</em>
// Solution: Based on the output, the structure of the required elements is:
// *) BOUNDARIES: The boundaries of the matches are:
// *) Left boundary: “<” followed by a variable amount of letters and a “>”.
//    The regex that match this condition is: <[a-zA-Z]+>
// *) Right boundary: “<” followed by “/” a variable amount of letters and “>”.
//    The regex that match this condition is: <\/[a-zA-Z]+>
// *) CONTENT: Inside the boundaries any amount of any character is allowed.
//     The regex that match this condition is: .*? It is important to say that
// *) I decided to use * instead of +, because it is not specified that it
//    could be nothing between the boundaries.
// *) The ? at the end of .*? is needed because it is important that the
//    match works on “lazy mode”, because if not it will provided a non-expected behavior.

// Thus, the regex that solves this problem is:
// REGEX: <[a-zA-Z]+>.*?<\/[a-zA-Z]+>
// Note: In this REGEX there is this “\/” which is the union of “\” and “/”
// EXAMPLE:
let regexG = /<[a-zA-Z]+>.*?<\/[a-zA-Z]+>/g;
let inputG =
  "Is <b>4 < -1/12</b> true? The <b>answer</b> will <em>surprise</em> you.";

let matchG = inputG.match(regexG);

// console.log(matchG);
