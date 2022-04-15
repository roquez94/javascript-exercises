const getTheTitles = function(books) {
    // let titles = books.map(o=>{
    //     books["title"];
    //    });

    return books.map(book => book['title']);
};

  // map iterates through each object in the array, and applies our arrow function
  // Array.map() method creates a new array from the results of calling a function for every element

// Do not edit below this line
module.exports = getTheTitles;
