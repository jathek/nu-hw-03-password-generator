// Assignment Code
let generateBtn = document.querySelector("#generate");
let alphaLowerSet = "abcdefghijklmnopqrstuvwxyz";
let alphaUpperSet = alphaLowerSet.toLocaleUpperCase();
let numberSet = "0123456789"
let specialSet = "~`!@#$%^&*()_-+={}[]|\\;:\"'<,>.?/"
let finalPassword = "";
let passwordSet = "";

function chooseCriteria() {
  let alphaLowerChoice = confirm("Include lowercase letters?");
  let alphaUpperChoice = confirm("Include uppercase letters?");
  let numberChoice = confirm("Include numbers?");
  let specialChoice = confirm("Include special characters?");
  lengthChoice = prompt("How many characters should the password contain? Enter a number between 8 and 128.");
  while (lengthChoice < 8 || lengthChoice > 128) {
    lengthChoice = prompt("The length must be between 8 and 128.");
  }
  console.log("lower:" + alphaLowerChoice + "\nupper:" + alphaUpperChoice + "\nnumber:" + numberChoice + "\nspecial:" + specialChoice);
  if (alphaLowerChoice) {
    passwordSet = passwordSet + alphaLowerSet;
  }
  if (alphaUpperChoice) {
    passwordSet = passwordSet + alphaUpperSet;
  }
  if (numberChoice) {
    passwordSet = passwordSet + numberSet;
  }
  if (specialChoice) {
    passwordSet = passwordSet + specialSet;
  }
}

function generatePassword() {
  chooseCriteria();
  finalPassword = "";
  for (let i = 0; i < lengthChoice; i++) {
    randomNumber = Math.random()*passwordSet.length;
    roundedNumber = Math.floor(randomNumber);
    finalPassword = finalPassword + passwordSet[roundedNumber];
  }
  passwordSet = "";
  return finalPassword;
}

// generatePassword();
console.log(finalPassword);
console.log(passwordSet);

// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
