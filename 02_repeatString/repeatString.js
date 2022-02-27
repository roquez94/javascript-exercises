let string = '';
const number = Math.floor(Math.random() * 10);

const repeatString = function(string, number) {
    let repeatedString = string;
    if (number == 0){
        repeatedString = "";
    } else if (number < 0){
        repeatedString = 'ERROR';
    } else {
        for (let i = 1; i < number; i++){
            repeatedString += string;
        } 
    }
    return repeatedString;
};

// Do not edit below this line
module.exports = repeatString;
