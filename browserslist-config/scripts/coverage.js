const browserslist = require("browserslist");

const myStats = require("./../index.js");
const browsers = browserslist(myStats);

let globalCoverage = browserslist.coverage(browsers).toFixed(2);
let studyportalsCoverage = browserslist.coverage(browsers, "my stats").toFixed(2);

console.log(`These browsers account for ${globalCoverage}% of all users globally`);
console.log(`These browsers account for ${studyportalsCoverage}% of all users on Studyportals`);