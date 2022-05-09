const findTheOldest = function(people) {

    function age(person) {
        return (person.yearOfDeath ? person.yearOfDeath : (new Date()).getFullYear()) - person.yearOfBirth;
    }

    let sorted = people.sort((a, b) => age(a) > age(b) ? -1 : 1)
    return sorted[0];

};

// Do not edit below this line
module.exports = findTheOldest;
