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

function getHusbandsOfSiblings(siblings) {
  let husbands = siblings
    .filter(sibling => sibling.isFemale === true && sibling.spouse)
    .map(sis => utils.capitalize(sis.spouse.name));
  return husbands;
}

function getSisters(siblings) {
  return siblings
    .filter(sibling => sibling.isFemale === true)
    .map(sis => utils.capitalize(sis.name));
}

function getBrothers(siblings) {
  return siblings
    .filter(sibling => sibling.isFemale === false)
    .map(bro => utils.capitalize(bro.name));
}

function mergeArrays(arr1, arr2) {
  return arr1.concat(arr2);
}

function getSisterInLaw(name, queen) {
  let person = findPerson(queen, name, true);
  if (person) {
    // wives of siblings (brothers)
    let personSiblings = siblings.getSiblingPerson(name, queen);
    let wivesOfSiblings = [];
    if (personSiblings) {
      wivesOfSiblings = getWivesOfSiblings(personSiblings);
    }
    // spouse's sisters
    let spouse = person.name === name ? person.spouse : person;
    let spouseSisters = [];
    if (spouse) {
      let spouseSiblings = siblings.getSiblingPerson(spouse.name, queen);
      if (spouseSiblings) {
        spouseSisters = getSisters(spouseSiblings);
      }
    }
    let sisterInLaws = mergeArrays(spouseSisters, wivesOfSiblings);
    sisterInLaws.length > 0
      ? console.log(sisterInLaws.join(" "))
      : console.log(commands.NONE);
  } else {
    console.log(commands.PERSON_NOT_FOUND);
    return;
  }
}

function getBrotherInLaw(name, queen) {
  let person = findPerson(queen, name, true);
  if (person) {
    // get husbands of siblings (sisters)
    let personSiblings = siblings.getSiblingPerson(name, queen);
    let husbandOfSiblings = [];
    if (personSiblings) {
      husbandOfSiblings = getHusbandsOfSiblings(personSiblings);
    }
    // spouse's brothers
    let spouse = person.name === name ? person.spouse : person;
    let spouseBrothers = [];
    if (spouse) {
      let spouseSiblings = siblings.getSiblingPerson(spouse.name, queen);
      if (spouseSiblings) {
        spouseBrothers = getBrothers(spouseSiblings);
      }
    }
    let brotherInLaws = spouseBrothers.concat(husbandOfSiblings);
    brotherInLaws.length > 0
      ? console.log(brotherInLaws.join(" "))
      : console.log(commands.NONE);
  } else {
    console.log(commands.PERSON_NOT_FOUND);
  }
}

module.exports = {
  getSisterInLaw,
  getBrotherInLaw
};
