// C. Using regular expressions, create a function 
// that will match all word palindromes of any size in a text.
function palindromeFinder(inputText){
    // Extraction of the words in the input 
    const wordsInInput = inputText.split(" ")
    let wordsByLength = {};

    //------START: ORDERING THE WORDS BY LENGTH------
    // The words will be saved in an object whose keys
    // are the length of the words in their respective values
    let i=0;
    while(true){
        // While will finish when wordsInInput is empty 
        if(wordsInInput.length ===0){
            break
        }
        // If there is a key with that is equal to the length of the word
        // the word will be added to that.
        try{
            wordsByLength[String(wordsInInput[0].length)].push(wordsInInput[0]);
        }
        // If there is not a key with that value, the code will create that key
        catch{
            wordsByLength[String(wordsInInput[0].length)] = [wordsInInput[0]] ;
        }

        // Because the code analyzes only the first word of -wordsInInput-
        // every iteration the code deletes that word. 
        wordsInInput.splice(0,1)
        i++
    }
    //------END: ORDERING THE WORDS BY LENGTH------



    //------START: STRACTING THE PALINDROMES------

    // To find the solution of this problem I decided to take
    // as starting point the solution of execercise d, section 2
    // of this questionnaire.
    // To find a palindrome it is possible to see that the
    // regex depends upon the number of characters as follows
    // Number of characters | regex
    //     2- aa            | (.{1,})
    //     3- aba           | (.{1,})\1
    //     4- aaaa          | (.{1,})(.{1,})\2\1
    //     5- aabaa         | (.{1,})(.{1,})(.{1,})\2\1
    //     6- aaaaaa        | (.{1,})(.{1,})(.{1,})\3\2\1
    //     7- aaabaaa       | (.{1,})(.{1,})(.{1,})(.{1,})\3\2\1

    // The goal of this solution is to built this regex using
    // two for cicles: one for the (.{1,}) and the other for \1

    let output = [];
    // Now the code extracts the entries (number of letters) 
    // and the values (the words) from -wordsByLength-
    let lengthAndWords = Object.entries( wordsByLength );
    // This for iterates on those values...
    for(elmnt of lengthAndWords){

        //---------START: CREATION OF THE REGEX---------
        let partialRegex = "";
        let capGroup = "(.{1,})"
        
        for(let j=1; j<= Math.ceil(Number(elmnt[0])/2) ;j++){
            partialRegex += capGroup
        }

        for(let k=Math.floor(Number(elmnt[0])/2); k>0;k-- ){
            partialRegex += "\\" + String(k)
        }

        let regex = new RegExp(partialRegex,"gi")
        //---------END: CREATION OF THE REGEX---------


        // Matching the palindroms inside -lengthAndWords -
        let stringElement = elmnt[1].join(" ");
        console.log("match: ", stringElement.match(regex))
        
        output += stringElement.match(regex)
        
    }
    //--------END: STRACTING THE PALINDROMES------
    return output
}

const textInput = "criterio abba loapaol -- yxpopxy *+77+* ababa burro 12321 _1a1_ wertrew huiopoiuh rugytygur prueba ama a  1 12 1234 12345 oco iui"

let palindromes =  palindromeFinder(textInput);
console.log(palindromes)

