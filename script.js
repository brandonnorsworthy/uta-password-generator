// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


//click button generate password
//generatePassword() main function doing work
// Gets called when the Generate Password btn is clicked return string to get displayed in the text area
function generatePassword() {
  //initialize password
  var password = 'no password 4 u... yet lul';

  var passwordMinLength = 8;
  var passwordMaxLength = 128;

  var passwordPreferencePrompts = ["Lowercase... ipsum", "Uppercase... LOREM", "Numbers... 12345", "Special Characters... /?!$%"];
  var passwordPreferenceChosen;

  //series of prompts alerts("")

  //prompt for the length of password RANGE [8chars -> 128chars]
  //character types to include in the password

  var passwordLength = Number(window.prompt("Length of the password to generate. Between 8 and 128 Characters")); //intialize passwordLength by using window prompt and convert response to a number

  while (!(passwordMinLength <= passwordLength) || !(passwordLength <= passwordMaxLength)){ //if passwordLength is too small or too large ask again deals with characters too
    passwordLength = Number(window.prompt("Length of the password to generate. Between 8 and 128 Characters"));
  }
1
  //lowercase, uppercase, numeric, and/or special characters
  window.confirm("ok or cancels stuff");
  lowerCaseChars = true;
  upperCaseChars = true;
  numericChars = true;
  specialChars = true;
  //after returning password shows in box
  return password;
}