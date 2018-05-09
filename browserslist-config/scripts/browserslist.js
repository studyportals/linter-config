const browserslist = require("browserslist");
const chalk = require("chalk");
const myStats = require("./../index.js");

const browsers = browserslist(myStats);

let result = {};

browsers.forEach(fullName => {
	const [browserName, version] = fullName.split(" ");
	
	if(!result.hasOwnProperty(browserName)) {
		result[browserName] = [];
	}

	result[browserName].unshift(version);
});

Object.entries(result).forEach(([browserName, version]) => {
	console.log(chalk.green(browserName), version.join(", "))	
});