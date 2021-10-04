

const reverseString = function(str) {

    let inputArray = str.split("");
    let revString = "";
  

    for (let i = inputArray.length - 1; i >= 0; --i) {
       
        revString = revString + inputArray[i];

    }

    return revString;

};

// Do not edit below this line
module.exports = reverseString;
