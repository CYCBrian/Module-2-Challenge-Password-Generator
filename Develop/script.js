//Variable for password length
var passwordLength = []

//Variables for password criteria
var criteriaLower = []
var criteriaUpper = []
var criteriaNumber = []
var criteriaSpecial = []

//variable for final array based on choices of criteria
var criteriaChoice = []

// Password Variables
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialCharacter = ["`", "-", "=", "[", "]", ";", "'", "\\", ",", ".", "/", "~", "_", "+", "{", "}", ":", "\"", "|", "<", ">", "?", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "`"]

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  // Prompts when the generate password button is clicked
  passwordLength = parseInt(prompt ("How long would you like the password to be? (Min. 8  Max. 128"));
  //if
  //no input before clicking okay  --  (!enter)
  //then
  //display alert with message  -- passwordLength = alert ("please enter a number")
  //else if
  //the number entered is less then 8 or more then 128  --  (passwordLength = enter<8 || enter>128)
  //then
  //display alert with message  -- passwordLength = parseInt(prompt ("please enter a number between 8 to 128"))
  //else
  //proceed to criteria fetching

  criteriaLower = confirm ("Would you like the password to include lower case letters? Press Okay to include or Cancel to exclude.");
  criteriaUpper = confirm ("Would you like the password to include upper case letters? Press Okay to include or Cancel to exclude.");
  criteriaNumber = confirm ("Would you like the password to include numbers? Press Okay to include or Cancel to exclude.");
  criteriaSpecial = confirm ("Would you like the password to include special characters? Press Okay to include or Cancel to exclude.")

  //if
  //user did not select any of the prompts  --  (!criteriaLower && !criteriaUpper && !criteriaNumber && !criteriaSpecial)
  //then
  //display alert with message alert  criteriaChoice = alert("please pick at least one criteria")
  //return writePassword ()
  //else
  //if
  //all 4 criteria chosen  --  criteriaLower && criteriaUpper && criteriaNumber && criteriaSpecial)
  //merge selected arrays into giant array --  criteriaChoice = criteriaLower.concat(criteriaUpper, criteriaNumber, criteriaSpecial)
  //else
  //if
  //3 criteria chosen (list of else if statements - permutation of 3 of the 4 criteria)
  //merge selected arrays into giant array --  criteriaChoice = criteriaLower.concat(criteriaUpper, criteriaSpecial)
  //else
  //if
  //2 criteria chosen (list of else if statements - permutation of 2 of the 4 criteria)
  //merge selected arrays into giant array --  criteriaChoice = criteriaLower.concat(criteriaUpper)
  //else
  //if
  //1 criteria chosen (list of else if statement - each of the criteria)
  //proceed to password generation

  // 
  var password = generatePassword();
    // for loop?  --  for (let i=0; i < passwordLength; i++)
    // this is the part that sucks
    // mathRandom

  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
