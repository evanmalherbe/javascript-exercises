const findLargest = function(num1,num2) { 
            
    if (num1 > num2) {
        return num1;
    } else {
        return num2;
    }
}

const sumAll = function(num1,num2) {
            
    let result = 0;
    let i; 
    const array = [];
    let largest = findLargest(num1,num2);

    if (num1 < 1 || num2 < 1) {
        console.log("Input is less than 1");
        return "ERROR";
    } else if (typeof num1 != "number" || typeof num2 != "number" ) {
        console.log("Input is not of type - number");
        return "ERROR";
    } else {
        if (largest == num1) {
            for (i = num2; i <= num1; i++) {
                array.push(i);
            }
        } else { 
            for (i = num1; i <= num2; i++) {
                array.push(i);
            } 
        }

        for (i = 0; i <= array.length -1; i++) {
            result = result + array[i];
        }

        console.log(result);
        return result;
    }

}

// Do not edit below this line
module.exports = sumAll;
