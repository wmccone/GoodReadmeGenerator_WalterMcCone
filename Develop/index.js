// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateReadMe = require('./utils/generateMarkdown')

// TODO: Create an array of questions for user input

const questions = () => {
//     //Project Title (0)
//     'What is the name of your project?',
//     //Description (1)
//     'Give your project a description.',
//     //Installation(2)
//     'What are the installation instructions?',
//     //Usage(3)
//     'How would someone use this application?',
//     //License(4)
//     'Which license would you like to use?',
//     //Contributors(5)
//     'Please list any collaborators and include their github profile links.',
//     //Test Instructions(6)
//     'Please include some tests for your application',
//     //Questions section containing user info(7)(8)
//     'What is your Github user name (Please include a link)?',
//     'What is your email address?'

// ];

return inquirer.prompt([
    //Prompts the user for their project name
    {
        type: 'input',
        name: 'project',
        message: 'What is the name of your project?',
    },
    //Prompts the user for their project description
    {
        type: 'input',
        name: 'description',
        message: 'Give your project a description.',
    },
    //Prompts the user for their installation instructions
    {
        type: 'input',
        name: 'instructions',
        message: 'What are the installation instructions?',
    },
    //Prompts the user for their use cases
    {
        type: 'input',
        name: 'usage',
        message: 'How would someone use this application?',
    },
    //Prompts the user for their license
    {
        type: 'list',
        name: 'license',
        message: 'Which license would you like to use?',
        choices: ['MIT', 'GPL', 'AGPL']
    },
    //Prompts the user for the contributors
    {
        type: 'input',
        name: 'contributors',
        message: 'Please list any collaborators and include their github profile links.',
    },
    //Prompts the user for their tests
    {
        type: 'input',
        name: 'Instructions',
        message: 'Please include some tests for your application',
    },
    //Prompts the user for their Github name and link
    {
        type: 'input',
        name: 'Github',
        message: 'What is your Github user name (Please include a link)?',
    },
    //Prompts the user for their email and contact information
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
    }
])
}
// TODO: Create a function to write README file
function writeToFile(data) {
    fs.writeFile(`${data.project}.md`, JSON.stringify(data), (err) =>
        err ? console.log(err) : console.log("success")
    );
}

// TODO: Create a function to initialize app
function init() {
    questions()
    .then( writeToFile(answers.project, answers))
    .then

}

// Function call to initialize app
init();
