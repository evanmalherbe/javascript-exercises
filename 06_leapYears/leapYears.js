const leapYears = function(year) {
    if (year % 4 == 0) {
        if (year % 100 == 0) {
            if (year % 400 == 0) {
                console.log("Leap year!")
                return true; 
            } else {
                console.log("Not a leap year.")
                return false;  
            }
        } else {
            console.log("Leap year!")
            return true;
        }
    } else {
        console.log("Not a leap year.")
        return false;
    }
};

// Do not edit below this line
module.exports = leapYears;
