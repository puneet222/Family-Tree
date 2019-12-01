const findPerson = require("../findPerson");
const commands = require("../commands");
const siblings = require("./siblings");
const utils = require("../utils");

function printChildern(children) {
  children.length > 0
    ? console.log(children.join(" "))
    : console.log(commands.NONE);
}

function getSon(name, queen) {
  let person = findPerson(queen, name, true);
  if (person) {
    let children = person.children
      .filter(child => child.isFemale === false)
      .map(sons => utils.capitalize(sons.name));
    printChildern(children);
  } else {
    console.log(commands.PERSON_NOT_FOUND);
  }
}

function getDaughter(name, queen) {
  let person = findPerson(queen, name, true);
  if (person) {
    let children = person.children
      .filter(child => child.isFemale === true)
      .map(daughter => utils.capitalize(daughter.name));
    printChildern(children);
  } else {
    console.log(commands.PERSON_NOT_FOUND);
  }
}

module.exports = {
  getSon,
  getDaughter
};
