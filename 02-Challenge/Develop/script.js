// Assignment Code
var generateBtn = document.querySelector("#generate");

const upper = 'ABCDEFGHIJKLMONOPQRSTUVWXYZ';
const lower = 'abcdefghijklmnopqrstuvwxyz';
const number = '1234567890';
const special = '!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~';



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
