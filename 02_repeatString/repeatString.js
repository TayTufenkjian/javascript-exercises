const repeatString = function(word, num) {

    if (num < 0) {
        return 'ERROR';
    }

    let wordRepeat = '';
    for (let i = 0; i < num; i++) {
        wordRepeat += word;
    }
    return wordRepeat;
};

// Do not edit below this line
module.exports = repeatString;
