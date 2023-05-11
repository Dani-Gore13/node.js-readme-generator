const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown.js");

// array of questions for user input
const questions = [
  {
    type: "input",
    name: "title",
    message: "What is the title of your project?",
  },
  {
    type: "input",
    name: "description",
    message: "Please provide a brief description of your project:",
  },
  {
    type: "input",
    name: "installation",
    message: "Please provide installation instructions:",
  },
  {
    type: "input",
    name: "usage",
    message: "Please provide usage instructions:",
  },
  {
    type: "input",
    name: "contribution",
    message: "Please provide contribution guidelines:",
  },
  {
    type: "input",
    name: "tests",
    message: "Please provide testing instructions:",
  },
  {
    type: "list",
    name: "license",
    message: "Please choose a license for your application:",
    choices: ["MIT", "Apache License 2.0", "ISC", "None", "Other"],
  },
  {
    type: "input",
    name: "username",
    message: "What is your GitHub username?",
  },
  {
    type: "input",
    name: "email",
    message: "What is your email address?",
  },
];

// function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) =>
    err ? console.error(err) : console.log("README file generated!")
  );
}

// function to initialize program
function init() {
  inquirer.prompt(questions).then((data) => {
    const markdown = generateMarkdown(data);
    writeToFile("README.md", markdown);
  });
}

// function call to initialize program
init();
