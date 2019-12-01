const findPerson = require("./findPerson");
const Person = require("./Person");

module.exports = {
  insertSpouse: function(name, betterHalf, queen) {
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
  },
  insertChild: function(name, gender, mother, queen) {
    // find the object whose name is same as mother and gender female
    // and gender female of spouse name as mother and gender male
    let parent = findPerson(queen, mother, true);
    if (parent) {
      let gen = gender === "female" ? true : false;
      let motherObj = parent.isFemale ? parent : parent.spouse;
      let fatherObj = parent.isFemale ? parent.spouse : parent;
      let child = new Person(name, gen, null, motherObj, fatherObj, []);
      parent.children.push(child);
    } else {
      console.log("Mother not found");
    }
  },
  getPaternalUncle: function(name, queen) {
    let person = findPerson(queen, name, false);
    if (person) {
      let father = person.father;
      if (father.mother) {
        let paternalUncles = father.mother.children
          .filter(
            child => child.isFemale === false && child.name != father.name
          )
          .map(uncle => uncle.name)
          .join(" ");
        console.log(paternalUncles);
      } else {
        console.log("No Paternal Uncles");
      }
    } else {
      console.log("Father does not exists");
    }
  },
  getPaternalAunt: function(name, queen) {
    let person = findPerson(queen, name, false);
    if (person) {
      let father = person.father;
      if (father.mother) {
        let paternalAunts = father.mother.children
          .filter(child => child.isFemale === true)
          .map(aunt => aunt.name)
          .join(" ");
        console.log(paternalAunts);
      } else {
        console.log("No Paternal Aunts");
      }
    } else {
      console.log("Father does not exists");
    }
  },

  getMaternalUncle: function(name, queen) {
    let person = findPerson(queen, name, false);
    if (person) {
      let mother = person.mother;
      if (mother.mother) {
        let maternalUncles = mother.mother.children
          .filter(child => child.isFemale === false)
          .map(uncle => uncle.name)
          .join(" ");
        console.log(maternalUncles);
      } else {
        console.log("No Maternal Uncles");
      }
    } else {
      console.log("Mother does not exists");
    }
  },

  getMaternalAunt: function(name, queen) {
    let person = findPerson(queen, name, false);
    if (person) {
      let mother = person.mother;
      if (mother.mother) {
        let maternalAunts = mother.mother.children
          .filter(
            child => child.isFemale === true && child.name !== mother.name
          )
          .map(aunt => aunt.name)
          .join(" ");
        console.log(maternalAunts);
      } else {
        console.log("No Maternal Aunts");
      }
    } else {
      console.log("Mother does not exists");
    }
  },

  getSon: function(name, queen) {
    let person = findPerson(queen, name, true);
    if (person) {
      let children = person.children
        .filter(child => child.isFemale === false)
        .map(sons => sons.name)
        .join(" ");
      console.log(children);
    }
  },

  getDaughter: function(name, queen) {
    let person = findPerson(queen, name, true);
    if (person) {
      let children = person.children
        .filter(child => child.isFemale === true)
        .map(sons => sons.name)
        .join(" ");
      console.log(children);
    }
  },

  getSiblings: function(name, queen) {
    let person = findPerson(queen, name, false);
    if (person) {
      if (person.mother) {
        let siblings = person.mother.children
          .filter(child => child.name !== person.name)
          .map(sibling => sibling.name)
          .join(" ");
        console.log(siblings);
      } else {
        console.log("Mother does not exists");
      }
    }
  }
};
