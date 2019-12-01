const findPerson = require("../findPerson");
const commands = require("../commands");
const siblings = require("./siblings");
const utils = require("../utils");

function getMaternalRelations(name, queen) {
  let person = findPerson(queen, name, true);
  if (person) {
    let originalPerson = person.name === name ? person : person.spouse;
    let mother = originalPerson.mother;
    if (mother) {
      let motherSiblings = siblings.getSiblingPerson(mother.name, queen);
      if (motherSiblings) {
        return motherSiblings;
      } else {
        // father does not have siblings
        console.log(commands.NONE);
        return null;
      }
    } else {
      // person doesn't have mother
      console.log(commands.NONE);
      return null;
    }
  } else {
    console.log(commands.PERSON_NOT_FOUND);
    return null;
  }
}

function getMaternalUncle(name, queen) {
  let motherSiblings = getMaternalRelations(name, queen);
  if (motherSiblings) {
    let maternalAunts = motherSiblings
      .filter(sibling => sibling.isFemale === false)
      .map(sis => utils.capitalize(sis.name));
    maternalAunts.length > 0
      ? console.log(maternalAunts.join(" "))
      : console.log(commands.NONE);
  }
}

function getMaternalAunt(name, queen) {
  let motherSiblings = getMaternalRelations(name, queen);
  if (motherSiblings) {
    let maternalAunts = motherSiblings
      .filter(sibling => sibling.isFemale === true)
      .map(sis => utils.capitalize(sis.name));
    maternalAunts.length > 0
      ? console.log(maternalAunts.join(" "))
      : console.log(commands.NONE);
  }
}

module.exports = {
  getMaternalUncle,
  getMaternalAunt
};
