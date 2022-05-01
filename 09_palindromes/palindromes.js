const palindromes = function(inputString) {

    // Find the alpha chars, make them lowercase, add them to an array
    let myArray = [];

    for (char of inputString) {
        if (char.match(/\w/)) {
            myArray.push(char.toLowerCase());  
        }
    }

    // Convert the array back to a string 
    // Reverse the array and convert it to a string 
    // Compare strings
    return (myArray.join("") === myArray.reverse().join(""));
};

// Do not edit below this line
module.exports = palindromes;
