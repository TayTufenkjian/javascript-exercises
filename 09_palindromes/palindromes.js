const palindromes = function(inputString) {

    // Find the alpha chars, make them lowercase, add them to an array
    let myArray = inputString.split('').filter(char => char.match(/\w/)).map(char => char.toLowerCase());
    
    // Convert the array back to a string 
    // Reverse the array and convert it to a string 
    // Compare strings
    return (myArray.join("") === myArray.reverse().join(""));
};

// Do not edit below this line
module.exports = palindromes;
