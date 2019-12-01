const insertSpouse = require("./update-family/insertSpouse");
const insertChild = require("./update-family/insertChild");
const paternal = require("./relationships/paternal");
const maternal = require("./relationships/maternal");
const inlaws = require("./relationships/inlaws");
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

  getSisterInLaw: inlaws.getSisterInLaw
};
