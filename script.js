// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
  var passWordLength = parseInt(prompt("how many chararcter for your password"));
  console.log(passWordLength)
  var includeSpeChar = confirm('click okay to confirm including special characters');
  var includeLowerCase = confirm('click okay to confirm including lower characters');
  var includeUpperCase = confirm('click okay to confirm including uppercase characters');
  var includeNum = confirm('click okay to confirm including number characters');

  
  console.log("please include special characters" + includeSpeChar);
  console.log("Please include lowercase characters" + includeLowerCase);
  console.log("Please include uppercase characters" + includeUpperCase);
  console.log("Please include num characters" + includeNum);


  var newPassWord = "";

  // Looping Through Password Length

  for (var i = 0; i < passWordLength; i++) {
    console.log(i)
    var result = [];
  
    if (includeSpeChars === true) {
      result.push(getRandomSpeChar())
    }
    
    if (includeLowerCase === true) {
      result.push(getRandomSpeChar())
    }

    if (includeUpperCase === true) {
      result.push(getRandomSpeChar())
    }

    if (includeNum === true) {
      result.push(getRandomSpeChar())
    }

    // Write if condition for lower, upper, and num
    newPassWord = newPassWord + result.join('');
    newPassWord = newPassWord.substring(0, passWordLength);
    console.log(newPassword) 
  }
  return newPassWord


 // Create 3 new functions random
function getRandomSpeChar() {
  var special = "!@#$%^&*()_+={}[]";
  return special[Math.floor(Math.random() * special.length)]
}

function getRandomSpeChar() {
  var special = "!@#$%^&*()_+={}[]";
  return special[Math.floor(Math.random() * special.length)]
}

function getRandomSpeChar() {
  var special = "!@#$%^&*()_+={}[]";
  return special[Math.floor(Math.random() * special.length)]
}
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword)