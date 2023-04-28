// Assignment Code
var generateBtn = document.querySelector("#generate");

//sets variables for the password generator to access
var characterLength = 8;
var passArr = [];

var specialChar = ['!','"','@','#','$','%','&','`','(',')','+','*','/','>','=','<','?','~','{','}',];
var lowerCase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z',];
var upperCase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z',];
var number = ['1','2','3','4','5','6','7','8','9','0',];
var upper = 'ABCDEFGHIJKLMONOPQRSTUVWXYZ';
var lower = 'abcdefghijklmnopqrstuvwxyz';
var number = '1234567890';
var special = `!"#$%&'()*+,-./:;<=>?@[\]^_{|}~`;
var password = "";

//defines a function that prompts the uder to select a character amount in the window between 8 and 128
function charAmount() {
  result = parseInt(window.prompt('Please enter a character amount'));
// checks to see if the number selected is between 8 and 128
  if (!Number.isInteger(result) || result <= 8 || result >= 128) {
    window.alert('Please enter a number beween 8 and 128');
    return charAmount();
  } else {
    return result;
  }
  }

  function inputConfirm(passwordText) {
    if (window.confirm(passwordText)) {
      return true;
    }
  };

  function generatePassword() {
   
    }};







// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function getPrompts(){
  characterLength = parseInt(prompt("How many characters would you like your character to be? (8-128 character)"));
  if(isNan(characterLength) || characterLength < 8 || characterLength > 128) {
    alert("Character length must be a number between 8 and 128 digits. Please try again.");
    return false;
  }

  if (confirm("would you like lowercase letters in your password?")) {
    passArr = passArr.concat(lowerCase);
  }
  if(confirm("Would you like uppcase letters in your password?")) {
    passArr = passArr.concat(upperCase);
  }
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
