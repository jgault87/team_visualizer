const Manager = require("./lib/Manager.js");
const Engineer = require("./lib/Engineer.js");
const Intern = require("./lib/Intern.js");


const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const generateFinal = require("./src/generateHTML.js");

const teamArr = [];