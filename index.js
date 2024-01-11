// TODO: Include packages needed for this application
const inquirer = require("inquirer");

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
    message: 'How can others contribute? ',
    name: 'contributions',  
},
{
    type: 'input',
    message: 'Here is how to test the project: ',
    name: 'tests',  
},
{
    type: 'list',
    message: 'Which license does your project have? ',
    name: 'license',  
    choices: ''
}
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
