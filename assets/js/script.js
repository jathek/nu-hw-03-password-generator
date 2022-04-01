// Assignment Code
let generateBtn = document.querySelector("#generate");
let alphaLowerSet = "abcdefghijklmnopqrstuvwxyz";
let alphaUpperSet = alphaLowerSet.toLocaleUpperCase();
let numberSet = "0123456789"
let specialSet = "~`!@#$%^&*()_-+={}[]|\\;:\"'<,>.?/"
let finalPassword = "";
let passwordSet = "";

function chooseCriteria() {
  let alphaLowerChoice = false;
  let alphaUpperChoice = false;
  let numberChoice = false;
  let specialChoice = false;
  let choiceAlertPunc = ".";
  do {
    alert("Please select at least one set" + choiceAlertPunc);
    alphaLowerChoice = confirm("Include lowercase letters?");
    alphaUpperChoice = confirm("Include uppercase letters?");
    numberChoice = confirm("Include numbers?");
    specialChoice = confirm("Include special characters?");
    choiceAlertPunc = "!"
  }
  while (!alphaLowerChoice && !alphaUpperChoice && !numberChoice && !specialChoice);
  lengthChoice = prompt("How many characters should the password contain? Enter a number between 8 and 128.");
  let lengthInvalid = false;
  do {
    lengthInvalid = false;
    if (!Number(lengthChoice)) {
      lengthInvalid = true;
      lengthChoice = prompt("Length must be a number!");
    }
    else if (!Number.isInteger(Number(lengthChoice))) {
      lengthInvalid = true;
      lengthChoice = prompt("Length must be a positive integer!");
    }
    else if (lengthChoice < 8 || lengthChoice > 128) {
      lengthInvalid = true;
      lengthChoice = prompt("The length must be between 8 and 128.");
    }
  }
  while (lengthInvalid);
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
    randomNumber = Math.random() * passwordSet.length;
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
