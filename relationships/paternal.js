const findPerson = require("../findPerson");
const commands = require("../commands");
const siblings = require("./siblings");
const utils = require("../utils");

function getPaternalRelations(name, queen) {
  let person = findPerson(queen, name, true);
  if (person) {
    let originalPerson = person.name === name ? person : person.spouse;
    let father = originalPerson.father;
    if (father) {
      let fatherSiblings = siblings.getSiblingPerson(father.name, queen);
      if (fatherSiblings) {
        return fatherSiblings;
      } else {
        // father does not have siblings
        console.log(commands.NONE);
        return null;
      }
    } else {
      // person doesn't have father
      console.log(commands.NONE);
      return null;
    }
  } else {
    console.log(commands.PERSON_NOT_FOUND);
    return null;
  }
}

function getPaternalUncle(name, queen) {
  let fatherSiblings = getPaternalRelations(name, queen);
  if (fatherSiblings) {
    let paternalUncles = fatherSiblings
      .filter(sibling => sibling.isFemale === false)
      .map(bro => utils.capitalize(bro.name));
    if (paternalUncles.length > 0) {
      console.log(paternalUncles.join(" "));
    } else {
      console.log(commands.NONE);
    }
  }
}

function getPaternalAunt(name, queen) {
  let fatherSiblings = getPaternalRelations(name, queen);
  if (fatherSiblings) {
    let paternalAunts = fatherSiblings
      .filter(sibling => sibling.isFemale === true)
      .map(sis => utils.capitalize(sis.name));
    if (paternalAunts.length > 0) {
      console.log(paternalAunts.join(" "));
    } else {
      console.log(commands.NONE);
    }
  }
}

module.exports = {
  getPaternalUncle,
  getPaternalAunt
};
