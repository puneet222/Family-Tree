const findPerson = require("../findPerson");
const Person = require("../Person");

module.exports = function(name, betterHalf, queen) {
  // find the betterhalf
  let person = findPerson(queen, betterHalf, false);
  if (!person.spouse) {
    let spouse = new Person(
      name,
      !person.isFemale,
      person,
      null,
      null,
      person.children
    );
    person.spouse = spouse;
  } else {
    console.log("Spouse Already present");
  }
};
