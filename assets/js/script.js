// Assignment Code
let generateBtn = document.querySelector("#generate");
let finalSet;
let finalLength;
let finalPassword;

function generatePassword() {
  finalLength = generateLength();
  finalSet = generateSet();
  finalPassword = ""
  for (let i = 0; i < finalLength; i++) {
    randomNumber = Math.random() * finalSet.length;
    roundedNumber = Math.floor(randomNumber);
    finalPassword += finalSet[roundedNumber];
  }
  finalSet = "";
  return finalPassword;
}
function generateLength() {
  choiceLength = prompt("How many characters should the password contain? Enter a number between 8 and 128.");
  let lengthValid = true;
  if (!Number(choiceLength)) {
    lengthValid = false;
    choiceLength = alert("Length must be a number!");
  }
  else if (!Number.isInteger(Number(choiceLength))) {
    lengthValid = false;
    choiceLength = alert("Length must be a positive integer!");
  }
  else if (choiceLength < 8 || choiceLength > 128) {
    lengthValid = false;
    choiceLength = alert("The length must be between 8 and 128.");
  }
  if (!lengthValid) {
    generateLength();
  }
  return choiceLength;
}
function generateSet() {
  let alphaLowerSet = "abcdefghijklmnopqrstuvwxyz";
  let alphaUpperSet = alphaLowerSet.toLocaleUpperCase();
  let numberSet = "0123456789";
  let specialSet = "~`!@#$%^&*()_-+={}[]|\\;:\"'<,>.?/";
  choiceSet = "";
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
  if (choiceSet === "") {
    generateLength();
  }
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
