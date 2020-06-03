
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

function generatePassword() {
  // Variables
  var lengthOfPass = prompt("How many characters would you like the password to be? Minumum 8 character, Maximum 128 characters");
  var userCharacterTypes = prompt("Would you like to use lowercase, uppercase, numbers, and/or special characters in your password? Please type in which you would like to use seperated by a comma").toLowerCase().split(",");
  var characterTypes = ["lowercase", "uppercase", "numbers", "special characters"];
  var numbers = "1234567890";
  var letters = "abcdefghijklmnopqrstuvwxyz";
  var specialCharacters = "!@#$%^&*()?><.,{}[]|";
  var allChars = "";
  var verifiedChar = false;
  var verifiedNum = false;
  var newPassword = ""

  // Check for correct length
  if (lengthOfPass >= 8 && lengthOfPass <= 128){
    lengthOfPass = lengthOfPass;
    verifiedNum = true;
  }
  else {
    alert("Please enter in a length between 8 and 128 characters")
  }
  // Check for character types
  for (var i = 0; i < userCharacterTypes.length; i++) {
      var currentWord = userCharacterTypes[i].trim();
    if (characterTypes.includes(currentWord)) {
      verifiedChar = true;
    }
  }
  if (verifiedChar === false) {
    alert("Please enter in atleast one character type");
  }
  // If both above criteria are met
  if (verifiedChar === true && verifiedNum === true) {
  // Append all selected character types to allChars

    if (userCharacterTypes.includes("lowercase")) {
      allChars += letters 
    }
    if (userCharacterTypes.includes("uppercase")) {
      allChars += letters.toUpperCase() 
    }
    if (userCharacterTypes.includes("numbers")) {
      allChars += numbers 
    }
    if (userCharacterTypes.includes("special characters")) {
      allChars += specialCharacters
    }
  // Generate new password
    for (var i = 0; i < lengthOfPass; i++){
      newPassword += allChars[Math.floor(Math.random() * allChars.length)]
    }

  }
  return newPassword
}
