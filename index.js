// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown')

// TODO: Create an array of questions for user input
const questions = [{
    type: 'input',
    message: 'What is the title of your project?',
    name: 'title',
},
{
    type: 'input',
    message: 'Write a brief summary describing your project: ',
    name: 'description',   
}, 
{
    type: 'input',
    message: 'Are there any installation instructions? ',
    name: 'installation',  
}, 
{
    type: 'input',
    message: 'Any usage information to be included? ',
    name: 'usage',  
},
{
    type: 'input',
    message: 'Anyone or anything you would like to credit? ',
    name: 'credits', 
},
{

    type: 'list',
    message: 'Which license does your project have? ',
    name: 'license',  
    choices: [
    'No License',
    'Apache License 2.0', 
    'GNU General Public License v3.0', 
    'MIT License', 
    'BSD 2-Clause Simplified License', 
    'BSD 3-Clause New or Revised License',
    'Boost Software License 1.0',
    'Creative Commons Zero v1.0 Universal',
    'Eclipse Public License 2.0',
    'GNU Affero General Public License v3.0',
    'GNU General Public License v2.0',
    'GNU Lesser General Public License v2.1',
    'Mozilla Public License 2.0',
    'The Unilicense',
    ],
},
{
    type: 'input',
    message: 'Does your project have a lot of features? Please list them here: ',
    name: 'features', 
},
{
    type: 'input',
    message: 'How can others contribute? ',
    name: 'contributions',  
},
{
    type: 'input',
    message: 'Here is how to test the project: ',
    name: 'tests',  
},
{
    type: 'input',
    message: 'What is your github username?: ',
    name: 'username', 
},
{
    type: 'input',
    message: 'What is your email?: ',
    name: 'email', 
},
];

// TODO: Create a function to write README file
function writeToFile(data) {
    inquirer
        .prompt(questions)
        .then((data) => {
            const fileName = `${data.title.split(" ").join("")}README.md`;

            fs.writeFile(fileName, JSON.stringify(generateMarkdown, null, "\t")), (err) =>
            err ? console.log(err) : console.log("Success!")
        });
};

// TODO: Create a function to initialize app
function init() {
    writeToFile();
};

// Function call to initialize app
init();
