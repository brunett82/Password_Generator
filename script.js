// Assignment Code
var generateBtn = document.querySelector("#generate");

//Variables
var number = '0123456789';
var special = '~`!@#$%^&*()-_=+[]{},<>?/|*.';
var lowerCase = 'abcdefghijklmnopqrstuvwxyz';
var upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';


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
  var lower = prompt('Would you like to include lower case characters in your password? (Yes or No)');
    if (lower == 'yes'){
      lower = true;
      return lower;
    }
    else if (lower == 'no'){
      lower = false;
      return lower;
    }
    else {
      alert('Answer Yes or No');
      lowerChar();
    }
    return lower;
}

/*When prompted for use of uppercase characters, user selects yes or no.*/
function upperChar(){
  var upper = prompt('Would you like to include upper case characters in your password? (Yes or No)');
    if (upper == 'yes'){
      upper = true;
      return upper;
    }
    else if (upper =='no'){
      upper = false;
      return upper;
    }
    else {
      alert ('Answer Yes or No');
      upperChar();
    }
    return upper;
}

/*When prompted for use of special characters, user selects yes or no.*/
function specialChar(){
  var specialty = prompt('Would you like to include special characters in your password? (Yes or No)');
    if (specialty == 'yes'){
      specialty = true;
      return specialty;
    } 
    else if (specialty == 'no'){
      specialty = false;
      return specialty;
    }
    else {
      alert('Answer Yes or No')
      specialChar();
    }
    return specialty;
}

/*When prompted for use of number characters, user selects yes or no.*/
function numberChar(){
  var numerals = prompt('Would you like to include numbers in your password? (Yes or No)');
    if (numerals == 'yes'){
      numerals = true;
      return numerals;
    }
    else if (numerals == 'no'){
      numerals = false;
      return numerals;
    }
    else {
      alert('Answer Yes or No')
      numberChar();
    }
    return numerals;
}

// Write password to the #password input

function generatePassword(){
  var pass = '';
  var output = '';
  lengthOfPwd();
  var lowerSelect = lowerChar();
  var upperSelect = upperChar();
  var numberSelect = numberChar();
  var specialSelect = specialChar();

  if (lowerSelect === true){
    output += lowerCase;
  } 
  if (upperSelect === true){
    output += upperCase;
  } 
  if (numberSelect === true){
    output += number;
  } 
  if (specialSelect === true){
    output += special;
  } 
  for (var i = 0; i < length; i++) {
    pass += output.charAt(Math.floor(Math.random() * output.length)); 
  }
  return pass;
}


function writePassword() {
  var password = '';
  password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}    
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
