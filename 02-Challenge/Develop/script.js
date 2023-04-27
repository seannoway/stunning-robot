// Assignment Code
var generateBtn = document.querySelector("#generate");

//sets variables for the password generator to access
var upper = 'ABCDEFGHIJKLMONOPQRSTUVWXYZ';
var lower = 'abcdefghijklmnopqrstuvwxyz';
var number = '1234567890';
var special = `!"#$%&'()*+,-./:;<=>?@[\]^_{|}~`;
var password = "";

//defines a function that prompts the uder to select a character amount in the window between 8 and 128
function charAmount() {
  result = parseInt(window.prompt('Please enter a character amount'));
// checks to see if the number selected is between 8 and 128
  if (!Number.isInteger(result) || result <= 7 || result >= 129) {
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







// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
