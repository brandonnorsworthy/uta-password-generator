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
  password = 'no password 4 u... yet lul'; //initialize password

/*   //series of prompts alerts("")
  alert("this is a alert"); */

  //prompt for the length of password RANGE [8chars -> 128chars]
  window.prompt("this is a prompt");
  //character types to include in the password
  passwordLength = 8;
  //lowercase, uppercase, numeric, and/or special characters
  lowerCaseChars = true;
  upperCaseChars = true;
  numericChars = true;
  specialChars = true;
  //after returning password shows in box
  return password;
}