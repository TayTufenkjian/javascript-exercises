const removeFromArray = function() {
    
    // Get the function arguments and convert them to an array
    const args = Array.from(arguments);

    // The first argument is the array that needs to be updated
    let inputArray = args[0];

    // All the remaining arguments are items that need to be removed from the input array
    const itemsToRemove = args.slice(1);
    const numItems = itemsToRemove.length;

    // Go through each item that needs to be removed
    for (i = 0; i < numItems; i++) {

        let itemToRemove = itemsToRemove[i]

        // Check that the item exists in the input array
        if (inputArray.includes(itemToRemove)) {

            // If the item does exist, find its index in the array and remove it
            let index = inputArray.indexOf(itemToRemove);
            inputArray.splice(index, 1);
        }
    }

    return inputArray;
};

// Do not edit below this line
module.exports = removeFromArray;
