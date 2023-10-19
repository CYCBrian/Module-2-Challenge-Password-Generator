//Variable for password length
var passwordLength

//Variables for password criteria
var criteriaLower
var criteriaUpper
var criteriaNumber
var criteriaSpecial 

//variable for final array based on choices of criteria
var criteriaChoice = []

// Password Variables
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
var specialCharacter = ["`", "-", "=", "[", "]", ";", "'", "\\", ",", ".", "/", "~", "_", "+", "{", "}", ":", "\"", "|", "<", ">", "?", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "`"]

// Assignment Code
var generateBtn = document.querySelector("#generate")

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword)

// Write password to the #password input
function writePassword() {
  // Prompts when the generate password button is clicked
  passwordLength = parseInt(prompt ("How long would you like the password to be? (Min. 8  Max. 128"))
  
  if (!passwordLength) {
    passwordLength = alert ("Please enter a number.")
    return writePassword()
  } else if (passwordLength < 8 || passwordLength > 128) {
    passwordLength = parseInt (alert ("Please enter a number between 8 to 128."))
    return writePassword()
  } else {
    criteriaLower = confirm ("Would you like the password to include lower case letters? Press Okay to include or Cancel to exclude.")
    criteriaUpper = confirm ("Would you like the password to include upper case letters? Press Okay to include or Cancel to exclude.")
    criteriaNumber = confirm ("Would you like the password to include numbers? Press Okay to include or Cancel to exclude.")
    criteriaSpecial = confirm ("Would you like the password to include special characters? Press Okay to include or Cancel to exclude.")
  }
 
  if (!criteriaLower && !criteriaUpper && !criteriaNumber && !criteriaSpecial) {
    criteriaChoice = alert("Please pick at least one criteria.")
    return writePassword ()
  }  else if (criteriaLower && criteriaUpper && criteriaNumber && criteriaSpecial){
    criteriaChoice = criteriaLower.concat(criteriaUpper, criteriaNumber, criteriaSpecial)
  } else if (criteriaLower && criteriaUpper && criteriaNumber){
    criteriaChoice = criteriaLower.concat(criteriaUpper, criteriaNumber)
  } else if (criteriaLower && criteriaUpper && criteriaSpecial){
    criteriaChoice = criteriaLower.concat(criteriaUpper, criteriaSpecial)
  } else if (criteriaLower && criteriaNumber && criteriaSpecial){
    criteriaChoice = criteriaLower.concat(criteriaNumber, criteriaSpecial)
  } else if (criteriaUpper && criteriaNumber && criteriaSpecial){
    criteriaChoice = criteriaUpper.concat(criteriaNumber, criteriaSpecial)
  } else if (criteriaLower && criteriaUpper){
    criteriaChoice = criteriaLower.concat(criteriaUpper)
  } else if (criteriaLower && criteriaNumber){
    criteriaChoice = criteriaLower.concat(criteriaNumber)
  } else if (criteriaLower && criteriaSpecial){
    criteriaChoice = criteriaLower.concat(criteriaSpecial)
  } else if (criteriaUpper && criteriaNumber){
    criteriaChoice = criteriaUpper.concat(criteriaNumber)
  } else if (criteriaUpper && criteriaSpecial){
    criteriaChoice = criteriaUpper.concat(criteriaSpecial)
  } else if (criteriaNumber && criteriaSpecial){
    criteriaChoice = criteriaNumber.concat(criteriaSpecial)
  } else if (criteriaLower){
    criteriaChoice = criteriaLower
  } else if (criteriaUpper){
    criteriaChoice = criteriaUpper
  } else if (criteriaNumber){
    criteriaChoice = criteriaNumber
  } else if (criteriaSpecial){
    criteriaChoice = criteriaSpecial
  }

  var password = generatePassword();

  function generatePassword() {
    for (let i = 0; i < passwordLength; i++) {
      var passwordIndex = Math.floor(Math.random() * criteriaChoice.length);
      password.push(passwordIndex);
    }
    return password
  }

  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}
