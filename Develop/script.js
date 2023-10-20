//Variable for password length
var passwordLength;

//Variables for password criteria
var criteriaLower;
var criteriaUpper;
var criteriaNumber;
var criteriaSpecial; 

//variable for final array based on choices of criteria
var criteriaChoice = [];

// Password Variables
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialCharacter = ["`", "-", "=", "[", "]", ";", "'", "\\", ",", ".", "/", "~", "_", "+", "{", "}", ":", "\"", "|", "<", ">", "?", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "`"];

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  // Prompts when the generate password button is clicked
  passwordLength = parseInt(prompt ("How long would you like the password to be? (Min. 8  Max. 128"));
  

  if (!passwordLength) {
    passwordLength = alert ("Please enter a number.");
    return writePassword();
  }
    
    else if (passwordLength < 8 || passwordLength > 128) {
    passwordLength = parseInt (alert ("Please enter a number between 8 to 128."));
    return writePassword();
  } 
    
    else {
    criteriaLower = confirm ("Would you like the password to include lower case letters? Press Okay to include or Cancel to exclude.");
    criteriaUpper = confirm ("Would you like the password to include upper case letters? Press Okay to include or Cancel to exclude.");
    criteriaNumber = confirm ("Would you like the password to include numbers? Press Okay to include or Cancel to exclude.");
    criteriaSpecial = confirm ("Would you like the password to include special characters? Press Okay to include or Cancel to exclude.");
  };


  if (!criteriaLower && !criteriaUpper && !criteriaNumber && !criteriaSpecial) {
    criteriaChoice = alert("Please pick at least one criteria.");
    return writePassword ()
  } 


  else if (criteriaLower && criteriaUpper && criteriaNumber && criteriaSpecial){
    criteriaChoice = lowerCase.concat(upperCase, number, specialCharacter);
  } 
  else if (criteriaLower && criteriaUpper && criteriaNumber){
    criteriaChoice = lowerCase.concat(upperCase, number);
  } 
  else if (criteriaLower && criteriaUpper && criteriaSpecial){
    criteriaChoice = lowerCase.concat(upperCase, specialCharacter);
  } 
  else if (criteriaLower && criteriaNumber && criteriaSpecial){
    criteriaChoice = lowerCase.concat(number, specialCharacter);
  } 
  else if (criteriaUpper && criteriaNumber && criteriaSpecial){
    criteriaChoice = upperCase.concat(number, specialCharacter);
  } 
  else if (criteriaLower && criteriaUpper){
    criteriaChoice = lowerCase.concat(upperCase);
  } 
  else if (criteriaLower && criteriaNumber){
    criteriaChoice = lowerCase.concat(number);
  } 
  else if (criteriaLower && criteriaSpecial){
    criteriaChoice = lowerCase.concat(specialCharacter);
  } 
  else if (criteriaUpper && criteriaNumber){
    criteriaChoice = upperCase.concat(number);
  } 
  else if (criteriaUpper && criteriaSpecial){
    criteriaChoice = upperCase.concat(specialCharacter);
  } 
  else if (criteriaNumber && criteriaSpecial){
    criteriaChoice = number.concat(specialCharacter);
  } 
  else if (criteriaLower){
    criteriaChoice = lowerCase;
  } 
  else if (criteriaUpper){
    criteriaChoice = upperCase;
  } 
  else if (criteriaNumber){
    criteriaChoice = number;
  } 
  else if (criteriaSpecial){
    criteriaChoice = specialCharacter;
  }


  var password = generatePassword();


  function generatePassword() {
    var password = ""; // Declare the password variable here
  
    for (let i = 0; i < passwordLength; i++) {
      var passwordIndex = Math.floor(Math.random() * criteriaChoice.length);
      password += criteriaChoice[passwordIndex];
    }
  
    return password;
  }
  
 
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}
