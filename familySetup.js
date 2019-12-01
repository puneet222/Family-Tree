const Person = require("./Person.js");
const familyTree = require("./familyTree");

function setup() {
  let anga_shan_children = [];
  let anga = new Person("anga", true, null, null, null, anga_shan_children);
  let shan = new Person("shan", false, anga, null, null, anga_shan_children);
  anga.spouse = shan;

  familyTree.insertChild("chit", "male", "anga", anga);
  familyTree.insertChild("ish", "male", "anga", anga);
  familyTree.insertChild("vich", "male", "anga", anga);
  familyTree.insertChild("aras", "male", "anga", anga);
  familyTree.insertChild("satya", "female", "anga", anga);

  familyTree.insertSpouse("amba", "chit", anga);
  familyTree.insertSpouse("lika", "vich", anga);
  familyTree.insertSpouse("chitra", "aras", anga);
  familyTree.insertSpouse("vyan", "satya", anga);

  familyTree.insertChild("dritha", "female", "amba", anga);
  familyTree.insertChild("vritha", "male", "amba", anga);
  familyTree.insertChild("tritha", "female", "amba", anga);

  familyTree.insertChild("vila", "female", "lika", anga);
  familyTree.insertChild("chika", "female", "lika", anga);

  familyTree.insertChild("jnki", "female", "chitra", anga);
  familyTree.insertChild("ahit", "male", "chitra", anga);

  familyTree.insertChild("asva", "male", "satya", anga);
  familyTree.insertChild("vyas", "male", "satya", anga);
  familyTree.insertChild("atya", "female", "satya", anga);

  familyTree.insertSpouse("jaya", "dritha", anga);
  familyTree.insertSpouse("arit", "jnki", anga);
  familyTree.insertSpouse("satvy", "asva", anga);
  familyTree.insertSpouse("krpi", "vyas", anga);

  familyTree.insertChild("yodhan", "male", "dritha", anga);

  familyTree.insertChild("laki", "male", "jnki", anga);
  familyTree.insertChild("lavnya", "female", "jnki", anga);

  familyTree.insertChild("vasa", "male", "satvy", anga);

  familyTree.insertChild("kriya", "male", "krpi", anga);
  familyTree.insertChild("krithi", "female", "krpi", anga);

  return anga;
}

module.exports = setup;
