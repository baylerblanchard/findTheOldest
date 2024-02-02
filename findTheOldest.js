const findTheOldest = function(people) {
    var oldest = people[0];
    var currentYear = new Date().getFullYear();
    for (var i = 0; i < people.length; i++) {
        if (!people[i].yearOfDeath) {
            people[i].yearOfDeath = currentYear;
        }
        if (people[i].yearOfDeath - people[i].yearOfBirth > oldest.yearOfDeath - oldest.yearOfBirth) {
            oldest = people[i];
        }
    }
    return oldest;
}
// Do not edit below this line
module.exports = findTheOldest;
