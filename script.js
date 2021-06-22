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

var password = {
  passwordLength: 0,
  lowercaseChars: null,
  uppercaseChars: null,
  numericChars: null,
  specialChars: null
}

//click button generate password
//generatePassword() main function doing work
// Gets called when the Generate Password btn is clicked return string to get displayed in the text area
function generatePassword() {
  var password = ``; //initialize password empty string so can concatenate to it

  //prompt length variables
  const passwordMinLength = 8; //intialize at top for easy access and reading
  const passwordMaxLength = 128; //intialize at top for easy access and reading
  //prompts for the user
  var passwordPreferencePrompts = [
    `Length of the password to generate.\nBetween ${passwordMinLength} and ${passwordMaxLength} Characters`, //prompt window (textbox for number)
    `Lowercase.\nExample: ipsum`,
    `Uppercase.\nExample: LOREM`,
    `Numbers.\nExample: 12345`,
    `Special Characters.\nExample: /?!$%`
  ];

  //user variables
  var passwordLength = 0;
  var passwordPreferenceChosen = []; //initialize empty array

  //text box prompt to take number of characters in password
  while (!(passwordMinLength <= passwordLength) || !(passwordLength <= passwordMaxLength)){ //if passwordLength is too small or too large ask again deals with characters too
    passwordLength = (Number(window.prompt(passwordPreferencePrompts[0]))); //assign passwordLength by using window prompt and convert response to a number
  }

  // True False prompts... lowercase, uppercase, numeric, and/or special characters
  for (let index = 1; index < passwordPreferencePrompts.length; index++) { //loop through all possible prompts (more can be added at anytime)
    passwordPreferenceChosen.push(window.confirm(`Would you like to include: ` + passwordPreferencePrompts[index])); //using index show prompts and add users choice into the passwordPreferenceChosen array for later use
  }

  //create password
  for (let index = 0; index < passwordLength; index++) {
    password += 'a'
  }
  //after returning password shows in box
  return password;
}