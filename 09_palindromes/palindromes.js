const palindromes = function (string) {
    reverseString = "";
    string = string.replace(/\s/g, "");
    string = string.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"");
    string = string.toLowerCase();
    for ( i = string.length-1; i >= 0; i--) {
        reverseString += string[i];
    }
    console.log(reverseString);
    if (string == reverseString){
        return true;
    }
    return false;

};

// Do not edit below this line
module.exports = palindromes;
