const findPerson = require("../findPerson");
const Person = require("../Person");
const commands = require("../commands");

module.exports = function(name, gender, mother, queen, setup = false) {
  // find the object whose name is same as mother and gender female
  // and gender female of spouse name as mother and gender male
  let parent = findPerson(queen, mother, true);
  if (parent) {
    if (
      (parent.name === mother && parent.isFemale === true) ||
      (parent.spouse.name === mother && parent.isFemale === false)
    ) {
      let gen = gender === "female" ? true : false;
      let motherObj = parent.isFemale ? parent : parent.spouse;
      let fatherObj = parent.isFemale ? parent.spouse : parent;
      let child = new Person(name, gen, null, motherObj, fatherObj, []);
      parent.children.push(child);
      if (!setup) {
        console.log(commands.CHILD_ADDITION_SUCCEEDED);
      }
    } else {
      console.log(commands.CHILD_ADDITION_FAILED);
    }
  } else {
    console.log(commands.PERSON_NOT_FOUND);
  }
};
