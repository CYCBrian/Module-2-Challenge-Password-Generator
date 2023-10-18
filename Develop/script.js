// Password Variables
const lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
const number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const specialCharacter = ["`", "-", "=", "[", "]", ";", "'", "\\", ",", ".", "/", "~", "_", "+", "{", "}", ":", "\"", "|", "<", ">", "?", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "`"]

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  // Prompts when the generate password button is clicked
  var passwordLength = prompt ("How long would you like the password to be? (Min. 8  Max. 128");
  //if the number entered is less then 8 or more then 128
  //then display alert with message "please enter a number between 8 to 128"
  //return to previous prompt
  //else proceed to next var fetching

  var passwordLower = confirm ("Would you like the password to include lower case letters?");
  var passwordUper = confirm ("Would you like the password to include upper case letters?");
  var passwordNumber = confirm ("Would you like the password to include numbers?");
  var passwordSpecial = confirm ("Would you like the password to include special characters?")

  //if user did not select any of the prompts
  //then display alert with message "please pick at least one criteria"
  // loop back to first criteria confirm window
  // else proceed to password generation


  var password = generatePassword();
  



  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
