const replaceString = (string) => {
  let newString = '';
  for(let i = 0; i < string.length; i++){
     if(string[i] === ' '){
       newString +='%20'
     } else {
      newString += string[i];
     }
    }
    return newString
  }
