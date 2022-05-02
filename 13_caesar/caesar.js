const caesar = function(message, shift) {

    // Initialize array to store new encoded message
    let newMessage = [];

    // Loop through each char in the message
    for (i = 0; i < message.length; i++) {

         // Get the original char
         let char = message[i]
        
        // Shift alpha chars only
        if (char.match(/[A-Za-z]/)) { 
            
            // Get the ASCII code and shift it
            let shiftedCode = message.charCodeAt(i) + shift;

            // Check the shiftedCode value
            // Adjust for wraparound from Z to A or z to a if needed
            if (char.match(/[A-Z]/)) {
                while (shiftedCode < 65) shiftedCode = shiftedCode + 26;    
                while (shiftedCode > 90) shiftedCode = shiftedCode - 26;                
            } else {
                while (shiftedCode < 97) shiftedCode = shiftedCode + 26;
                while (shiftedCode > 122) shiftedCode = shiftedCode - 26;
            }

            // Convert from ASCII code to alpha string and update the new message
            newMessage[i] = String.fromCharCode(shiftedCode);
        } else {
            newMessage[i] = char;
        }        
    }
    return newMessage.join('');
};

// Do not edit below this line
module.exports = caesar;
