function findPerson(person, name, withSpouse) {
  if (person.name === name) {
    return person;
  }
  if (withSpouse && person.spouse && person.spouse.name === name) {
    return person;
  }
  if (person.children.length > 0) {
    let returnObj = null;
    person.children.forEach(child => {
      let result = findPerson(child, name, withSpouse);
      if (result) {
        returnObj = result;
        return;
      }
    });
    return returnObj;
  } else {
    return null;
  }
}

module.exports = findPerson;
