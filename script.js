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

// Gets called when the Generate Password btn is clicked return string to get displayed in the text area
function generatePassword() {
  //prompt length variables
  const passwordMinLength = 8; //intialize at top for easy access and reading
  const passwordMaxLength = 128; //intialize at top for easy access and reading
  const passwordCharacters = `ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789?!@#$%^&*()-_`
  const passwordPreferenceCharacterSpacing = [0,26,52,62].concat([26,26,10,13]); //first array is the space the characters start at second array is the length of that section
  //prompts for the user
  const passwordPreferencePrompts = [`Length of the password to generate.\nBetween ${passwordMinLength} and ${passwordMaxLength} Characters`, `Uppercase characters\nExample: LOREM`, `Lowercase characters\nExample: ipsum`, `Number characters\nExample: 12345`, `Special characters\nExample: /?!$%`];

  var password = ``; //initialize password empty string so can concatenate to it
  var passwordLength = 0;
  var passwordPreferenceChosen = []; //initialize empty array

  //text box prompt to take number of characters in password
  while (!(passwordMinLength <= passwordLength) || !(passwordLength <= passwordMaxLength)){ //if passwordLength is too small or too large ask again deals with characters too
    passwordLength = Number(window.prompt(passwordPreferencePrompts[0])); //assign passwordLength by using window prompt and convert response to a number
  }

  // True False prompts... lowercase, uppercase, numeric, and/or special characters
  for (let index = 1; index < passwordPreferencePrompts.length; index++) { //loop through all possible prompts (more can be added at anytime)
    passwordPreferenceChosen.push(window.confirm(`Would you like to include: ` + passwordPreferencePrompts[index])); //using index show prompts and add users choice into the passwordPreferenceChosen array for later use
  }

  //create password by concatinating each character onto the password variable
  for (let index = 0; index < passwordLength; index++) {
    var characterTypeChosen = Math.floor(Math.random() * (passwordPreferencePrompts.length - 1)); //randomly chooses 0-4 to see what characters to output (upper, lower, special)
    while (passwordPreferenceChosen[characterTypeChosen] === false) { //make sure valid choice matches what the user entered
      characterTypeChosen = Math.floor(Math.random() * (passwordPreferencePrompts.length - 1));
    }
    password += passwordCharacters[Math.floor(passwordPreferenceCharacterSpacing[characterTypeChosen] + Math.floor(Math.random() * passwordPreferenceCharacterSpacing[characterTypeChosen + passwordPreferencePrompts.length - 1]))];
  }

  return password; //after returning password shows in box
}