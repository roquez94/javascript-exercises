const palindromes = function (word) {

    let normalWord = word.toLowerCase().replace(/[^a-z]/g, "").split("").join("");
    let reverseWord = word.toLowerCase().replace(/[^a-z]/g, "").split("").reverse().join("");

    return normalWord == reverseWord;
  
};

// Do not edit below this line
module.exports = palindromes;
