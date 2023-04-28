// Assignment Code


//sets variables for the password generator to access
var characterLength = 8;
var passArr = [];

var specialChar = ['!', '"', '@', '#', '$', '%', '&', '`', '(', ')', '+', '*', '/', '>', '=', '<', '?', '~', '{', '}',];
var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',];
var upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',];
var number = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0',];

var generateBtn = document.querySelector("#generate");

generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  var correctPrompts = getPrompts(); // calls the get prompt function inside the write password function
  var passwordText = document.querySelector("#password");

  if (correctPrompts) { //only generates password if the promts are inputted correctly
    var newPassword = generatePassword();
    passwordText.value = newPassword;
  } else {
    passwordText.value = "";
  }
}

function generatePassword() {
  var password = "";
  for (var i = 0; i < characterLength; i++) {
    var randomPass = Math.floor(Math.random() * passArr.length);
    password = password + passArr[randomPass];
  }
  return password;
}

function getPrompts() {
  passArr = [];
  characterLength = parseInt(prompt("How many characters would you like your password to be? (8-128 characters)"));

  if (isNaN(characterLength) || characterLength < 8 || characterLength > 128) {
    alert("Character length must be a number between 8 - 128 digits. Please try again.");
    return false;
  }
  if (confirm("would you like lowercase letters in your password?")) {
    passArr = passArr.concat(lowerCase);
  }
  if (confirm("Would you like uppcase letters in your password?")) {
    passArr = passArr.concat(upperCase);
  }
  if (confirm("Would you like special characters in your password?")) {
    passArr = passArr.concat(specialChar);
  }
  if (confirm("Would you like numbers in your password?")) {
    passArr = passArr.concat(number);
  }
  return true;
}
// Add event listener to generate button

