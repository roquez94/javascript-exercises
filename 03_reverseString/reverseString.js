let String = '';

const reverseString = function() {
    let word = String.split("");
    let reverse = word.reverse();
    let reverseWord = reverse.join("");

    return reverseWord;
};

// Do not edit below this line
module.exports = reverseString;
