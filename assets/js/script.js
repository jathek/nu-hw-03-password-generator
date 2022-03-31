// Assignment Code
let generateBtn = document.querySelector("#generate");
let alphaLowerSet = "abcdefghijklmnopqrstuvwxyz";
let alphaUpperSet = alphaLowerSet.toLocaleUpperCase();
let numberSet = "0123456789"
let specialSet = "~`!@#$%^&*()_-+={}[]|\\;:\"'<,>.?/"
let passwordBuild = "";

function generatePassword() {
  passwordBuild = "";
  for (let i = 0; i < 20; i++) {
    randomNumber = Math.random()*specialSet.length;
    roundedNumber = Math.floor(randomNumber);
    passwordBuild = passwordBuild + specialSet[roundedNumber];
  }

}

generatePassword();
console.log(passwordBuild);

// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
