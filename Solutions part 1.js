// PROBLEM A
// 1.	Write a string for each case that would satisfy at least one match for the following regular expressions:
// A	.abc
// •	This regex means: “Any character followed by abc”
// •	If the input is: “Holabc”, the regex will match: abc
// Example:
let regexA = /.abc/g;
let inputA = "Holabc";
let matchA = inputA.match(regexA);
// console.log(matchA);

// PROBLEM B
// B.	a+b?!!1{4}
// •	This regex means: “at least 1 a, optionally followed by b, followed by !!1111”
// •	Some inputs that satisfy this regex are:
// -	“ab!!1111”
// -	“aa!!1111”
// -	“aaaaaab!!111”
// Example:
let regexB = /a+b?!!1{4}/g;
let inputBa = "ab!!1111";
let inputBb = "aa!!1111";
let inputBc = "aaaaa!!1111";

// console.log(inputBa.match(regexB));
// console.log(inputBb.match(regexB));
// console.log(inputBc.match(regexB));

// B.	.{3}a\.b
// •	This regex means: “3 characters followed by a.b”
// •	An input that satisfy this regex is:
// -	“XDRa.b”
// Example:
let regexC = /.{3}a\.b/g;
let inputC = "XDRa.b";

// console.log(inputC.match(regexC));

// D.	\w
// •	This regex means: “any letter, number or underscore (_)”
// •	Some inputs that satisfy this regex are:
// -	“a”
// -	“B”
// -	“8”
// Example:
let regexD = /\w/g;
let inputDa = "a";
let inputDb = "B";
let inputDc = "8";

// console.log(inputDa.match(regexD));
// console.log(inputDb.match(regexD));
// console.log(inputDc.match(regexD));

// E.	\s
// •	This regex means: “any space or tab”
// •	An input that satisfy this regex is:
// -	“Good morning” =>matches “ ”
// Example:
let regexE = /\s/g;
let inputE = "Good morning";

// console.log(inputE.match(regexE)); // Expected " "

// F.	\d
// •	This regex means: “Digit”
// •	An input that satisfy this regex is:
// -	“I have 2 dogs” =>matches “2”
// Example:
let regexF = /\d/g;
let inputF = "I have 2 dogs";

// console.log(inputF.match(regexF)); // Expected "2"

// G.	.
// •	This regex means: “Any character”
// •	Some inputs that satisfy this regex are:
// -	“X”
// -	“.”
// -	“7”
// Example:
let regexG = /./g;
let inputGa = "X";
let inputGb = ".";
let inputGc = "7";

// console.log(inputGa.match(regexG));
// console.log(inputGb.match(regexG));
// console.log(inputGc.match(regexG));

// H.	[abc]
// •	Square brackets define a character set.
// •	Square brackets mean: “match anything inside”
// •	This regex means: “match a, b or c”
// •	Some inputs that satisfy this regex are:
// -	abba
// -	cab
// Example:
let regexH = /[abc]/g;
let inputHa = "abba";
let inputHb = "cab";

// console.log(inputHa.match(regexH));
// console.log(inputHb.match(regexH));

// I.	(abc)
// •	Parentheses define a group
// •	Parentheses mean: “match anything that is equal to the group inside”
// •	This regex means: “match abc”
// •	An input that satisfy this regex is:
// -	“I am learning the abc”
// Example:
let regexI = /(abc)/g;
let inputIa = "I am learning the abc";

console.log(inputIa.match(regexI));
