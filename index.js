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
    'No',
    'Apache', 
    'GNU', 
    'MIT', 
    'BSD', 
    'Boost',
    'Eclipse',
    'Mozilla',
    'Unilicense',
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
            const fileName = `${data.title.split(" ").join("")}.README.md`;
            const dataString = generateMarkdown(data);

            fs.writeFile(fileName, dataString, (err) => { 
            err ? console.log(err) : console.log("Success!")
            });
};

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then((data) => {
            writeToFile(data);
        });
};

// Function call to initialize app
init();
