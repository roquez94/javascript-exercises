const fibonacci = function(string) {
    let fib = 0
    let fib1 = 1; 

    if (string == 0) {
        return fib;
    } else if (string < 0) {
        return "OOPS";
    } else { 
    for(n = 1 ; n <= string ; n++){
        let temp = fib;
        fib = fib + fib1;
        fib1 = temp;
    }
}

    return fib;
};

// Do not edit below this line
module.exports = fibonacci;
