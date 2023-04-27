// Assignment Code
var generateBtn = document.querySelector("#generate");
//sets variables for the password generator to access
var upper = 'ABCDEFGHIJKLMONOPQRSTUVWXYZ';
var lower = 'abcdefghijklmnopqrstuvwxyz';
var number = '1234567890';
var special = `!"#$%&'()*+,-./:;<=>?@[\]^_{|}~`;





// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
