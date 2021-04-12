// Assignment Code
var generateBtn = document.querySelector("#generate");

//Variables
var number = '0123456789';
var special = '~`!@#$%^&*()-_=+[]{},<>?/|*.'
var lowerCase = 'abcdefghijklmnopqrstuvwxyz'
var upperCase = lowerCase.toUpperCase();

//Prompt functions
/*When prompted for desired length of password user chooses length >8 but <128*/
function lengthOfPwd(){
  length = prompt('How many characters in your passowrd? (min = 8, max = 128)');
    if (length>128){
      alert('Password too long. (min = 8, max = 128)');
      lengthOfPwd();
    }
    else if (length<8){
      alert('Password too short. (min = 8, max = 128)')
      lengthOfPwd();
    }
    return length;
}

/*When prompted for use of lowercase characters, user selects yes or no.*/
function lowerChar(){
  lower = prompt('Would you like to include lower case characters in your password? (Yes or No)');

}

/*When prompted for use of uppercase characters, user selects yes or no.*/

/*When prompted for use of special characters, user selects yes or no.*/

/*When prompted for use of number characters, user selects yes or no.*/

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
