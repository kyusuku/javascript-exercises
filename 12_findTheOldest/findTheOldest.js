const findTheOldest = function(people) {
    let res = people[0];
    const currentYear = (new Date()).getFullYear();
    let lastAge = ("yearOfDeath" in res) ? res.yearOfDeath - res.yearOfBirth :
        currentYear - res.yearOfBirth;
    
    for (let i = 1; i < people.length; i++) {
        let person = people[i];

        currAge = ("yearOfDeath" in person) ? person.yearOfDeath - person.yearOfBirth :
        currentYear - person.yearOfBirth;

        res = currAge > lastAge ? person : res;
        lastAge = currAge;
    }

    return res;
};

// Do not edit below this line
module.exports = findTheOldest;
