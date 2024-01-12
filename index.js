// Includes inquirer npm pkg
const inquirer = require("inquirer");
// includes fs built in node pkg
const fs = require('fs');
// includes generateMarkdown.js file
const generateMarkdown = require('./utils/generateMarkdown')

// array of questions for user input
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

//function to write README file
function writeToFile(data) {
            // variable for readme file name
            const fileName = `${data.title.split(" ").join("")}.README.md`;
            //variable for generateMarkdown.js
            const dataString = generateMarkdown(data);

            // module to write readme with parameters, fileName, dataString & err
            fs.writeFile(fileName, dataString, (err) => { 
            // if stmt, if error log error, otherwise log success
            err ? console.log(err) : console.log("Success!")
            });
};

// function to initialize app
function init() {
    inquirer
        //prompts questions in console
        .prompt(questions)
        // then runs writeToFile function
        .then((data) => {
            writeToFile(data);
        });
};

// Function call to initialize app
init();
