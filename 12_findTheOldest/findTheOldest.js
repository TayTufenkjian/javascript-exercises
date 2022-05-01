const findTheOldest = function(people) {

    let oldest = people[0];

    for (i = 0; i < people.length; i++) {
        let person = people[i];

        if (person.yearOfDeath) {
            person.age = person.yearOfDeath - person.yearOfBirth;
        } else {
            today = new Date()
            person.age = today.getFullYear() - person.yearOfBirth;
        }

        if (person.age > oldest.age) {
            oldest = person;
        }
    }

    return oldest;
};

// Do not edit below this line
module.exports = findTheOldest;
