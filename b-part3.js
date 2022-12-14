//-------------START: INITIALIZATION-----------------
// In this part the code extracts the raw text. This will
// be used as basis to hash tag the word given bu the user
// but -texto- will not be modified.
const mainText = document.getElementById("main-text");
let texto = mainText.innerHTML;
//---------------END: INITIALIZATION-------------------


//-------------START: APPEND HASH-----------------
function submit() {
  // Every time the function is called, the code sets
  // the value of the text, to its original. This
  // avoids have multiple hashed words.
  mainText.innerHTML = texto

  // Extraction of the word wiven by the user
  let word = document.getElementsByName("main-word");
  const toHashTag = word[0].value;

  // Validation of the input 
  // The validation is: only letters between word boundaries:
  if(/\b[a-z]+\b/ig.test(toHashTag)){
    
    // The word that the code searches is between word
    // boundaries, this is to avoid problems such as:
    // if word = ball, then the result will be Base#ball
    // and this is not what is expected.
    const regex = new RegExp(`\\b${toHashTag}\\b`, "gi");

    // Serch for the word given by the user:
    // If the word is found, a # is append at the begging
    let replacement = mainText.innerHTML.replace(regex, "#" + toHashTag);
    
    // The code refresh the content of the text:
    mainText.innerHTML = replacement
  }else{
    alert("Introduce a valid word")
  }
  
}
//--------------END: APPEND HASH------------------

//-------------START: TWITTER SEARCH-----------------
function twitterSearch(){
  const twitter = "https://twitter.com/search?q="
  let word = document.getElementsByName("main-word");
  const toHashTag = word[0].value;

  window.open(twitter + toHashTag);
  
}
//--------------END: TWITTER SEARCH------------------




