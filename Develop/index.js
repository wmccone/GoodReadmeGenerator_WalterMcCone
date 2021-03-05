// This will list all the of the packages to be used in the readme generator
const inquirer = require('inquirer');
const fs = require('fs');
const readMe = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input

const questions = () => {

    //This function is going to prompt the user for Readme content using Inquirer
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
            choices: ['MIT', 'GPLv3', 'Apache 2.0', 'No License']
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
            name: 'tests',
            message: 'Please include some tests for your application',
        },
        //Prompts the user for their Github name and link
        {
            type: 'input',
            name: 'github',
            message: 'What is your Github user name?',
        },

        {
            type: 'input',
            name: 'githublink',
            message: 'What is your Github profile URL?',
        },
        //Prompts the user for their email and contact information
        {
            type: 'input',
            name: 'email',
            message: 'What is your email address?',
        }
    ])
}
// This function is going to write the file using the files system and throw an error if it catches one.


function writeToFile(data) {
    fs.writeFile(`${data.project}README.md`, readMe.generateMarkdown(data), (err) =>
        err ? console.log(err) : console.log("success")
    );
}

// This function will initialize the function and log either a success message or an error
function init() {
    //this function asks the questions using inquirer
    questions()
        //this function then writes the data to a readme file
        .then((data) => writeToFile(data))
        //logs a success
        .then(() => console.log("Your ReadMe has been created!"))
        //catches an error and displays it.
        .catch((err) => console.error(err));

}

// Function call to initialize app
init();
