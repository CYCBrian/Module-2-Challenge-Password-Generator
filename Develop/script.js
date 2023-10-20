// Password Variables
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialCharacter = ["`", "-", "=", "[", "]", ";", "'", "\\", ",", ".", "/", "~", "_", "+", "{", "}", ":", "\"", "|", "<", ">", "?", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "`"];

// Variable for password length.
var passwordLength;

// Variables for available arrays.
var arrayLower;
var arrayUpper;
var arrayNumber;
var arraySpecial; 

// Variable for final array based on chosen array.
var finalArray = [];

// Targeting element with ID #generate
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button.
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input.
function writePassword() {
  
  // Prompt when the generate password button is clicked. The value is converted to integers.
  passwordLength = parseInt(prompt ("How long would you like the password to be? (Min. 8  Max. 128"));

  // If no input was entered into the prompt before clicking okay, an alert will appear with a message asking the user to enter a number. The function then returns to the first step.
    if (!passwordLength) {
    passwordLength = alert ("Please enter a number.");
    return writePassword();
  }
    
    // If the number entered is lower than 8 or higher than 129, an alert will appear with a message asking the user to enter a number between 8 and 128. The function then returns to the first step.
    else if (passwordLength < 8 || passwordLength > 128) {
    passwordLength = parseInt (alert ("Please enter a number between 8 to 128."));
    return writePassword();
  }   

  // Stop the function execution if "Cancel" button is clicked. FOR SOME REASON IT DOESN'T WORK!!!!!
    // else if (passwordLength === null) {
      // return;
    // }
    
    //Otherwise, browser display 4 dialogs for the user to choose which array to incorporate into the generation of the password.
    else {
    arrayLower = confirm ("Would you like the password to include lower case letters? Press Okay to include or Cancel to exclude.");
    arrayUpper = confirm ("Would you like the password to include upper case letters? Press Okay to include or Cancel to exclude.");
    arrayNumber = confirm ("Would you like the password to include numbers? Press Okay to include or Cancel to exclude.");
    arraySpecial = confirm ("Would you like the password to include special characters? Press Okay to include or Cancel to exclude.");
  };

  // If no array is chosen, an alert will appear with a message asking the user to choose at least one array. The function then returns to the first step.
  if (!arrayLower && !arrayUpper && !arrayNumber && !arraySpecial) {
    finalArray = alert("Please pick at least one option.");
    return writePassword ()
  } 

  // Otherwise, begin process of concatenating the arrays chosen by the user.
  else if (arrayLower && arrayUpper && arrayNumber && arraySpecial){
    finalArray = lowerCase.concat(upperCase, number, specialCharacter);
  } 
  else if (arrayLower && arrayUpper && arrayNumber){
    finalArray = lowerCase.concat(upperCase, number);
  } 
  else if (arrayLower && arrayUpper && arraySpecial){
    finalArray = lowerCase.concat(upperCase, specialCharacter);
  } 
  else if (arrayLower && arrayNumber && arraySpecial){
    finalArray = lowerCase.concat(number, specialCharacter);
  } 
  else if (arrayUpper && arrayNumber && arraySpecial){
    finalArray = upperCase.concat(number, specialCharacter);
  } 
  else if (arrayLower && arrayUpper){
    finalArray = lowerCase.concat(upperCase);
  } 
  else if (arrayLower && arrayNumber){
    finalArray = lowerCase.concat(number);
  } 
  else if (arrayLower && arraySpecial){
    finalArray = lowerCase.concat(specialCharacter);
  } 
  else if (arrayUpper && arrayNumber){
    finalArray = upperCase.concat(number);
  } 
  else if (arrayUpper && arraySpecial){
    finalArray = upperCase.concat(specialCharacter);
  } 
  else if (arrayNumber && arraySpecial){
    finalArray = number.concat(specialCharacter);
  } 
  else if (arrayLower){
    finalArray = lowerCase;
  } 
  else if (arrayUpper){
    finalArray = upperCase;
  } 
  else if (arrayNumber){
    finalArray = number;
  } 
  else if (arraySpecial){
    finalArray = specialCharacter;
  }

  // The variable password will be whatever is generated from the generatePassword function.
  var password = generatePassword();

  // Function to generate the password.
  function generatePassword() {
    
    // Declaring the password variable.
    var password = "";
  
    // Loop through the length of passwordLength.
    for (let i = 0; i < passwordLength; i++) {

      // Generate a random index to select a character from finalArray array.
      var passwordIndex = Math.floor(Math.random() * finalArray.length);

      // Append the selected character to the password.
      password += finalArray[passwordIndex];
    }
  
    // Return the generated password.
    return password;
  }
  
  // Targeting element with ID #password.
  var passwordText = document.querySelector("#password");

  // Replace placeholder text in the element with the generated password.
  passwordText.value = password;
}
