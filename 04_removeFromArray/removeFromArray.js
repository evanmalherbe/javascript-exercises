const removeFromArray = function(inputArray,itemToRemove) {
    let currentArgument;
    let i;
    let arrayLength = inputArray.length;
    let argumentsLength = arguments.length;
   
    // Runs this loop if function has more than 2 arguments
    if (argumentsLength > 2) {
        for (currentArgument = 1; currentArgument <= argumentsLength -1; currentArgument++) {

            for (i = 0; i <= arrayLength - 1; i++) {

                if (inputArray[i] === arguments[currentArgument]) {
                    inputArray.splice(i,1);
                }
            }
        }  

        console.log(inputArray);
        return inputArray;

        // Else runs this loop if function has only 2 arguments 
    }  else { 
        for (i = 0; i <= arrayLength - 1; i++) {
            if (inputArray[i] == itemToRemove) {
                inputArray.splice(i,1);
            }
        } 

        console.log(inputArray);
        return inputArray;
    } 
}

// Do not edit below this line
module.exports = removeFromArray;
