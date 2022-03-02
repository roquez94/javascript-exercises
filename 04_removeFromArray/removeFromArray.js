const removeFromArray = function(...theArgs) {
    const array = theArgs[0];
    //creat a new empty array
    const toCut = [];
  // use forEach to go through the array
  array.forEach((item)=> {
    // push every element into the new toCut array
    // UNLESS it is included in the function arguments
    // so we create a new array with every item, except those that should be removed
        if (!theArgs.includes(item)) {
            toCut.push(item);
        }        
            });
    return toCut;
};

// Do not edit below this line
module.exports = removeFromArray;
