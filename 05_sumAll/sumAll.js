const sumAll = function(num1,num2) {
    let difference = num2 - num1;
    let result = 0;
    let i; 
    const array = [];

    for (i = num1; i <= num2; i++) {
        array.push(i);
    }

    for (i = 0; i <= array.length -1; i++) {
        result = result + array[i];
    }

    return result;

};

// Do not edit below this line
module.exports = sumAll;
