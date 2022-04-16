const findTheOldest = function(people) {

    let oldPerson = people.sort((a , z) => {
        //thisYear grabs current year if person is still alive
        let thisYear = new Date().getFullYear();
        // let age = (people["yearOfDeath"] || thisYear) - people["yearOfBirth"]; 
       
        let lastGuy = (a["yearOfDeath"] || thisYear) - a["yearOfBirth"];
        let nextGuy = (z["yearOfDeath"] || thisYear) - z["yearOfBirth"];


        if (lastGuy > nextGuy){
            return -1;
        } else {
            return 1;
        }
    });
    return people[0];
};

// Do not edit below this line
module.exports = findTheOldest;
