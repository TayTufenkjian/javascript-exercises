const fibonacci = function(num) {

    num = parseInt(num);

    if (num < 0) return 'OOPS';
    if (num <= 2) return 1;

    let sum = 0;
    let a = 1;
    let b = 1;

    for (i = 2; i < num; i++) {
        sum = a + b;
        a = b;
        b = sum;
    }

    return sum;
};

// Do not edit below this line
module.exports = fibonacci;
