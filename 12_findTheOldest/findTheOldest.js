const findTheOldest = function(people) {
    return people[0].yearOfBirth
};
        console.log(findTheOldest([{
          name: "Carly",
          yearOfBirth: 1942,
          yearOfDeath: 1970,
        },
        {
          name: "Ray",
          yearOfBirth: 1962,
          yearOfDeath: 2011,
        },
        {
          name: "Jane",
          yearOfBirth: 1912,
          yearOfDeath: 1941,
        },
      ]));
// Do not edit below this line
module.exports = findTheOldest;
