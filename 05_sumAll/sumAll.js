const sumAll = function (first, second) {
    let sum = 0;
    let low;
    let high;

    if (first < second){
        low = first;
        high = second;
    } else {
        low = second;
        high = first;
    }

    if (!Number.isInteger(first) || !Number.isInteger(second) 
        || first < 0 || second < 0){
        //first == NaN || second == NaN 
        //|| Array.isArray(first) || Array.isArray(second)
        sum = "ERROR";
    } else {
        for (let i = low; i <= high; i++){
            sum += +i; 
        }
    }

        return sum;
};

// Do not edit below this line
module.exports = sumAll;
