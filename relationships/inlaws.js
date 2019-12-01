const findPerson = require("../findPerson");
const commands = require("../commands");
const siblings = require("./siblings");
const utils = require("../utils");

function getWivesOfSiblings(siblings) {
  let wives = siblings
    .filter(sibling => sibling.isFemale === false && sibling.spouse)
    .map(bro => utils.capitalize(bro.spouse.name));
  return wives;
}

function getSisters(siblings) {
  return siblings
    .filter(sibling => sibling.isFemale === true)
    .map(sis => utils.capitalize(sis.name));
}

function mergeArrays(arr1, arr2) {
  return arr1.concat(arr2);
}

function getSisterInLaw(name, queen) {
  let person = findPerson(queen, name, true);
  if (person) {
    // wives of siblings
    let wifeSiblings = siblings.getSiblingPerson(name, queen);
    let wivesOfSiblings = [];
    if (wifeSiblings) {
      wivesOfSiblings = getWivesOfSiblings(wifeSiblings);
    }
    console.log(wivesOfSiblings);
    // spouse's sisters
    let spouse = person.name === name ? person.spouse : person;
    let spouseSisters = [];
    if (spouse) {
      let spouseSiblings = siblings.getSiblingPerson(spouse.name, queen);
      if (spouseSiblings) {
        spouseSisters = getSisters(spouseSiblings);
      }
    }
    console.log(spouseSisters);
    let sisterInLaws = mergeArrays(spouseSisters, wivesOfSiblings);
    sisterInLaws.length > 0
      ? console.log(sisterInLaws.join(" "))
      : console.log(commands.NONE);
  } else {
    console.log(commands.PERSON_NOT_FOUND);
    return;
  }
}

module.exports = {
  getSisterInLaw
};
