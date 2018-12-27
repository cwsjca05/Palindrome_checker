function palindrome(str) {

  // set any string to all lowercase so there are no false negatives based on case differences
  
  var newStr = str.toLowerCase();
  
  // per the project specification, remove all non-alphanumeric characters before checking for a palindrome
  
  newStr = newStr.replace(/[^a-z0-9]/gi, "");
  
  // create a new variable that will first have the characters of the string split, then reversed, and then joined back together
  
  var tester = newStr.split("");
  
  tester.reverse();
  
  tester=tester.join("");
  
  // if the new variable is still equal to the original string, then it is a palindrome
  
  if(tester==newStr){
    return true;
  }
  else{
    return false;
  }
  
}



palindrome("eye");
