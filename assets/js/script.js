// Assignment Code
// get element for button
let generateBtn = document.querySelector("#generate");
// set variables for final password generation
let finalSet;
let finalLength;

// function for button
function generatePassword() {
  // call generateLength to get length of password
  finalLength = generateLength();
  // call generateSet to get character sets for password
  finalSet = generateSet();
  // generate password
  let finalPassword = "";
  for (let i = 0; i < finalLength; i++) {
    randomNumber = Math.random() * finalSet.length;
    roundedNumber = Math.floor(randomNumber);
    finalPassword += finalSet[roundedNumber];
  }
  finalSet = "";
  // pass complete password out of function
  return finalPassword;
}
function generateLength() {
  // ask user to confirm length of password
  let choiceLength = prompt("How many characters should the password contain? Enter a number between 8 and 128.");
  // boolean for length validity. reset on every recursion
  let lengthValid = true;
  // confirm if user input is a number
  if (!Number(choiceLength)) {
    lengthValid = false;
    choiceLength = alert("Length must be a number!");
  }
  // confirm if user input is an integer
  else if (!Number.isInteger(Number(choiceLength))) {
    lengthValid = false;
    choiceLength = alert("Length must be a positive integer!");
  }
  // confirm if user input is between 8 and 128
  else if (choiceLength < 8 || choiceLength > 128) {
    lengthValid = false;
    choiceLength = alert("The length must be between 8 and 128!");
  }
  // if input is invalid, recurse until valid length received
  if (!lengthValid) {
    choiceLength = generateLength();
  }
  // pass choiceLength out of function
  return choiceLength;
}
function generateSet() {
  // create sets
  let alphaLowerSet = "abcdefghijklmnopqrstuvwxyz";
  let alphaUpperSet = alphaLowerSet.toLocaleUpperCase();
  let numberSet = "0123456789";
  let specialSet = "~`!@#$%^&*()_-+={}[]|\\;:\"'<,>.?/";
  let choiceSet = "";
  // ask user to confirm sets for password
  if (confirm("Include lowercase letters?")) {
    choiceSet += alphaLowerSet;
  }
  if (confirm("Include uppercase letters?")) {
    choiceSet += alphaUpperSet;
  }
  if (confirm("Include numbers?")) {
    choiceSet += numberSet;
  }
  if (confirm("Include special characters?")) {
    choiceSet += specialSet;
  }
  // if choiceSet is empty, ask user again
  if (choiceSet === "") {
    alert("You must choose at least one set!")
    choiceSet = generateSet();
  }
  // pass choiceSet out of function
  return choiceSet;
}

// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
