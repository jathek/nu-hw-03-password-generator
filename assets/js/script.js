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
  console.log(alphaLowerChoice + " " + alphaUpperChoice + " " + numberChoice + " " + specialChoice);
  if (alphaLowerChoice === true) {
    passwordSet = passwordSet + alphaLowerSet;
  }
  if (alphaUpperChoice === true) {
    passwordSet = passwordSet + alphaUpperSet;
  }
  if (numberChoice === true) {
    passwordSet = passwordSet + numberSet;
  }
  if (specialChoice === true) {
    passwordSet = passwordSet + specialSet;
  }
}

function generatePassword() {
  chooseCriteria();
  finalPassword = "";
  for (let i = 0; i < 20; i++) {
    randomNumber = Math.random()*passwordSet.length;
    roundedNumber = Math.floor(randomNumber);
    finalPassword = finalPassword + passwordSet[roundedNumber];
  }
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
