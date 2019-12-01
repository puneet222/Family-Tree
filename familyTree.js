const findPerson = require("./findPerson");
const Person = require("./Person");
const commands = require("./commands");
const utils = require("./utils");

const insertSpouse = require("./update-family/insertSpouse");
const insertChild = require("./update-family/insertChild");
const paternal = require("./relationships/paternal");
const maternal = require("./relationships/maternal");
const siblings = require("./relationships/siblings");
const children = require("./relationships/children");

module.exports = {
  insertSpouse,

  insertChild,

  getPaternalUncle: paternal.getPaternalUncle,

  getPaternalAunt: paternal.getPaternalAunt,

  getMaternalUncle: maternal.getMaternalUncle,

  getMaternalAunt: maternal.getMaternalAunt,

  getSon: children.getSon,

  getDaughter: children.getDaughter,

  getSiblings: siblings.getSiblings,

  getSisterInLaw: function(name, queen) {
    let person = findPerson(queen, name, true);
    if (person) {
      // wives of siblings
      let siblings = this.getSiblingPerson(name, queen);
      let wivesOfSiblings = [];
      if (siblings) {
        wivesOfSiblings = siblings
          .filter(sibling => sibling.isFemale === false && sibling.spouse)
          .map(bro => utils.capitalize(bro.spouse.name));
      }
      console.log(wivesOfSiblings);
      // spouse's sisters
      let spouse = person.name === name ? person.spouse : person;
      let spouseSisters = [];
      if (spouse) {
        let spouseSiblings = this.getSiblingPerson(spouse.name, queen);
        spouseSisters = spouseSiblings
          .filter(sibling => sibling.isFemale === true)
          .map(sis => utils.capitalize(sis.name));
      }
      console.log(spouseSisters);
    } else {
      console.log(commands.PERSON_NOT_FOUND);
      return;
    }
  }
};
