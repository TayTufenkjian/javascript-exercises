const sumAll = function(firstNum, secondNum) {

    if (firstNum < 0 || secondNum < 0 || typeof firstNum !== 'number' || typeof secondNum !== 'number') {
        return 'ERROR';
    }

    let numStart = firstNum;
    let numEnd = secondNum;

    if (firstNum > secondNum) {
        numStart = secondNum;
        numEnd = firstNum;
    }

    let sum = 0;
    for (i = numStart; i <= numEnd; i++) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
