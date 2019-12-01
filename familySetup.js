const Person = require("./Person.js");
const familyTree = require("./familyTree");

function setup() {
  let anga_shan_children = [];
  let anga = new Person("anga", true, null, null, null, anga_shan_children);
  let shan = new Person("shan", false, anga, null, null, anga_shan_children);
  anga.spouse = shan;

  familyTree.insertChild("chit", "male", "anga", anga, true);
  familyTree.insertChild("ish", "male", "anga", anga, true);
  familyTree.insertChild("vich", "male", "anga", anga, true);
  familyTree.insertChild("aras", "male", "anga", anga, true);
  familyTree.insertChild("satya", "female", "anga", anga, true);

  familyTree.insertSpouse("amba", "chit", anga);
  familyTree.insertSpouse("lika", "vich", anga);
  familyTree.insertSpouse("chitra", "aras", anga);
  familyTree.insertSpouse("vyan", "satya", anga);

  familyTree.insertChild("dritha", "female", "amba", anga, true);
  familyTree.insertChild("vritha", "male", "amba", anga, true);
  familyTree.insertChild("tritha", "female", "amba", anga, true);

  familyTree.insertChild("vila", "female", "lika", anga, true);
  familyTree.insertChild("chika", "female", "lika", anga, true);

  familyTree.insertChild("jnki", "female", "chitra", anga, true);
  familyTree.insertChild("ahit", "male", "chitra", anga, true);

  familyTree.insertChild("asva", "male", "satya", anga, true);
  familyTree.insertChild("vyas", "male", "satya", anga, true);
  familyTree.insertChild("atya", "female", "satya", anga, true);

  familyTree.insertSpouse("jaya", "dritha", anga);
  familyTree.insertSpouse("arit", "jnki", anga);
  familyTree.insertSpouse("satvy", "asva", anga);
  familyTree.insertSpouse("krpi", "vyas", anga);

  familyTree.insertChild("yodhan", "male", "dritha", anga, true);

  familyTree.insertChild("laki", "male", "jnki", anga, true);
  familyTree.insertChild("lavnya", "female", "jnki", anga, true);

  familyTree.insertChild("vasa", "male", "satvy", anga, true);

  familyTree.insertChild("kriya", "male", "krpi", anga, true);
  familyTree.insertChild("krithi", "female", "krpi", anga, true);

  return anga;
}

module.exports = setup;
