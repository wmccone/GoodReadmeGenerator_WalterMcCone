// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateReadMe = require('./utils/generateMarkdown')

// TODO: Create an array of questions for user input

const questions = [
    //Project Title (0)
    'What is the name of your project?',
    //Description (1)
    'Give your project a description.',
    //Installation(2)
    'What are the installation instructions?',
    //Usage(3)
    'How would someone use this application?',
    //License(4)
    'Which license would you like to use?',
    //Contributors(5)
    'Please list any collaborators and include their github profile links.',
    //Test Instructions(6)
    'Please include some tests for your application',
    //Questions section containing user info(7)(8)
    'What is your Github user name (Please include a link)?',
    'What is your email address?'

];


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(`${fileName}.md`, JSON.stringify(data), (err) =>
        err ? console.log(err) : console.log("success")
    );
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'project',
            message: questions[0],
        },
        {
            type: 'input',
            name: 'description',
            message: questions[1],
        },
        {
            type: 'input',
            name: 'instructions',
            message: questions[2],
        },
        {
            type: 'input',
            name: 'usage',
            message: questions[3],
        },
        {
            type: 'list',
            name: 'license',
            message: questions[4],
            choices: ['MIT', 'GPL', 'AGPL']
        },
        {
            type: 'input',
            name: 'contributors',
            message: questions[5],
        },
        {
            type: 'input',
            name: 'Instructions',
            message: questions[6],
        },
        {
            type: 'input',
            name: 'Github',
            message: questions[7],
        }
        {
            type: 'input',
            name: 'email',
            message: questions[8],
        }
    ])

}

// Function call to initialize app
init();
