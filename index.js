const Manager = require("./lib/Manager.js");
const Engineer = require("./lib/Engineer.js");
const Intern = require("./lib/Intern.js");

const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const generateFinal = require("./src/generateHTML.js");

// empty array to be populated by userinput
const teamArr = [];


const addEmployee = () => {
  inquirer.prompt([
      {
        type: "list",
        message: "Which type of team member would you like to add?",
        name: "role",
        choices: [
          "Manager",
          "Engineer",
          "Intern",
          "I dont want to add anymore team members",
        ],
      },
    ])
    .then(function (data) {
      switch (data.role) {
        case "Manager":
          managerPrompt();
          break;
        case "Engineer":
          engineerPrompt();
          break;
        case "Intern":
          internPrompt();
          break;

        default:
          generateFinal();
      }
    });
};


const managerPrompt = () => {
    inquirer.prompt ([
      
      {
        type: "input",
        name: "managerName",
        message: "What is the manager's name?"
      },
  
      {
        type: "input",
        name: "managerId",
        message: "What is the manager's employee ID?"
      },
  
      {
        type: "input",
        name: "managerEmail",
        message: "What is the manager's email?"
      },
  
      {
        type: "input",
        name: "managerOffice",
        message: "What is the manager's office number?"
      }
  
    ])
    .then(answers => {
      const manager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.managerOffice);
      teamArr.push(manager);
      addEmployee();
    });
  
  }



const engineerPrompt = () => {
    inquirer.prompt([
  {
    type: "input",
    name: "engName",
    message: "What is the Engineers name?",
  },
  {
    type: "input",
    name: "engId",
    message: "What is the Engineers ID?",
  },
  {
    type: "input",
    name: "engEmail",
    message: "What is the Engineers email?",
  },
  {
    type: "input",
    name: "engGithub",
    message: "What is the Engineers GitHub username?",
  }
])
.then(answers => {
    const engineer = new Engineer (answers.engName, answers.engId, answers.engEmail, answers.engGithub);
    teamArr.push(engineer);
    employeePrompt();
});
}

const internPrompt = () => { 
   inquirer.prompt ([
  {
    type: "input",
    name: "internName",
    message: "What is the Interns name?",
  },
  {
    type: "input",
    name: "internId",
    message: "What is the Interns ID?",
  },
  {
    type: "input",
    name: "internEmail",
    message: "What is the Interns email?",
  },
  {
    type: "input",
    name: "internSchool",
    message: "What is the Interns school name?",
  }
])
.then(answers => {
    const intern = new Intern(answers.internName, answers.internId, answers.internEmail, answers.internSchool);
    teamArr.push(intern);
    addEmployee();
});

}


function init() {
    addEmployee();
//     then((teamArr) => fs.writeFileSync('./dist/renderedteam.html', generateFinal(teamArr)))
// .then(() => console.log('Successfully generated team'))
// .catch((err) => console.error(err));
}


init();


