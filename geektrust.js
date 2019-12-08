const fs = require("fs");

const familySetup = require("./familySetup");
const commands = require("./commands");
const familyTree = require("./familyTree");
const findPerson = require("./findPerson");

let queen = familySetup();

const filename = process.argv[2];
fs.readFile(filename, "utf8", (err, data) => {
  if (err) throw err;
  let commands = data.split("\n");
  commands = commands.filter(command => command !== "");
  commands.forEach(command => runCommand(command));
});

function runCommand(command) {
  let input = command.split(" ");
  let task = input[0];
  if (task === commands.ADD_CHILD) {
    familyTree.insertChild(
      input[2].toLowerCase().replace(/\n/g, ""),
      input[3].toLowerCase().replace(/\n/g, ""),
      input[1].toLowerCase().replace(/\n/g, ""),
      queen
    );
  }
  if (task === commands.GET_RELATIONSHIP) {
    let relationship = input[2].replace(/\n/g, "");
    let name = input[1].toLowerCase().replace(/\n/g, "");

    switch (relationship) {
      case commands.RELATIONSHIPS.PATERNAL_UNCLE:
        familyTree.getPaternalUncle(name, queen);
        break;
      case commands.RELATIONSHIPS.PATERNAL_AUNT:
        familyTree.getPaternalAunt(name, queen);
        break;
      case commands.RELATIONSHIPS.MATERNAL_UNCLE:
        familyTree.getMaternalUncle(name, queen);
        break;
      case commands.RELATIONSHIPS.MATERNAL_AUNT:
        familyTree.getMaternalAunt(name, queen);
        break;
      case commands.RELATIONSHIPS.SISTER_IN_LAW:
        familyTree.getSisterInLaw(name, queen);
        break;
      case commands.RELATIONSHIPS.BROTHER_IN_LAW:
        familyTree.getBrotherInLaw(name, queen);
        break;
      case commands.RELATIONSHIPS.SON:
        familyTree.getSon(name, queen);
        break;
      case commands.RELATIONSHIPS.DAUGHTER:
        familyTree.getDaughter(name, queen);
        break;
      case commands.RELATIONSHIPS.SIBLINGS:
        familyTree.getSiblings(name, queen);
        break;
      case "FIND":
        console.log(findPerson(queen, name, false));
        break;
      default:
        console.log("No Such relationship exists ", relationship);
    }
  }
}
