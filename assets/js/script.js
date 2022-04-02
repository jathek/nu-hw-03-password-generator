// Assignment Code
// get element for button
let generateBtn = document.querySelector("#generate");
// set variables for final password generation
let finalCharSet;
let finalLength;

// generate password from user input gathered by generateLength and generateCharSet
function generatePassword() {
  // call generateLength to get length of password
  finalLength = generateLength();
  // call generateCharSet to get character sets for password
  finalCharSet = generateCharSet();
  // generate password
  let finalPassword = "";
  for (let i = 0; i < finalLength; i++) {
    randomNumber = Math.random() * finalCharSet.length;
    roundedNumber = Math.floor(randomNumber);
    finalPassword += finalCharSet[roundedNumber];
  }
  finalCharSet = "";
  // pass complete password out of function
  return finalPassword;
}

// set password length based on user input
function generateLength() {
  // ask user to confirm length of password
  let userLength = prompt("How many characters should the password contain? Enter a number between 8 and 128.");
  // boolean for length validity. reset on every recursion
  let lengthValid = true;
  // confirm if user input is a number
  if (!Number(userLength)) {
    lengthValid = false;
    userLength = alert("Length must be a number!");
  }
  // confirm if user input is an integer
  else if (!Number.isInteger(Number(userLength))) {
    lengthValid = false;
    userLength = alert("Length must be a positive integer!");
  }
  // confirm if user input is between 8 and 128
  else if (userLength < 8 || userLength > 128) {
    lengthValid = false;
    userLength = alert("The length must be between 8 and 128!");
  }
  // if input is invalid, recurse until valid length received
  if (!lengthValid) {
    userLength = generateLength();
  }
  // pass userLength out of function
  return userLength;
}

// set character sets based on user input
function generateCharSet() {
  // create sets
  let alphaLowerSet = "abcdefghijklmnopqrstuvwxyz";
  let alphaUpperSet = alphaLowerSet.toLocaleUpperCase();
  let numberSet = "0123456789";
  let specialSet = "~`!@#$%^&*()_-+={}[]|\\;:\"'<,>.?/";
  let userCharSet = "";
  // ask user to confirm character sets for password
  if (confirm("Include lowercase letters?")) {
    userCharSet += alphaLowerSet;
  }
  if (confirm("Include uppercase letters?")) {
    userCharSet += alphaUpperSet;
  }
  if (confirm("Include numbers?")) {
    userCharSet += numberSet;
  }
  if (confirm("Include special characters?")) {
    userCharSet += specialSet;
  }
  // if userCharSet is empty, ask user again
  if (userCharSet === "") {
    alert("You must choose at least one set!")
    userCharSet = generateCharSet();
  }
  // pass userCharSet out of function
  return userCharSet;
}

// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
