const findPerson = require("../findPerson");
const commands = require("../commands");
const utils = require("../utils");

function getSiblingPerson(name, queen) {
  let person = findPerson(queen, name, false);
  if (person) {
    if (person.mother) {
      let siblings = person.mother.children.filter(
        child => child.name !== person.name
      );
      return siblings;
    } else {
      return null;
    }
  } else {
    return null;
  }
}

function getSiblings(name, queen) {
  let siblings = getSiblingPerson(name, queen);
  if (siblings) {
    let returnedSiblings =
      siblings.length > 0
        ? siblings.map(sibling => utils.capitalize(sibling.name)).join(" ")
        : commands.NONE;
    console.log(returnedSiblings);
  } else {
    console.log(commands.NONE);
  }
}

module.exports = {
  getSiblingPerson,
  getSiblings
};
