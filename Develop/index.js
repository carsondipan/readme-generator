// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require('fs');
const util = require("util");

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'Input the title of your project!',
        validate: titleInput => {
            if (titleInput) {
                return true;
            } else {
                console.log('Enter a project title.');
                return false;
            }
        }
    }
    {
        type: 'list',
        name: 'license',
        message: 'What licenses are you utilizing?',
        choices: ['None', 'MIT', 'Apache', 'GPL v3.0'],
        validate: licenseInput => {
            if (licenseInput) {
                return true;
            } else {
                console.log('Enter your licenses utilized.')
                return false;
            }
        }
    }
    {
        type: 'input',
        name: 'description',
        message: 'Describe your project',
        validate: descriptionInput => {
            if (descriptionInput) {
                return true;
            } else {
                console.log('Enter a description for your project.')
                return false;
            }
        }
    }
    {
        type: 'input',
        name: 'installation',
        message: 'How do you install your project?',
        validate: installInput => {
            if (installInput) {
                return true;
            } else {
                console.log('Enter installation details')
                return false;
            }
        }
    }
    {
        type: 'input',
        name: 'usage',
        message: 'How do you run your project code?',
        validate: usageInput => {
            if (usageInput) {
                return true;
            } else {
                console.log('Enter usage case')
                return false;
            }
        }
    }
    {
        type: 'input',
        name: 'contributors',
        message: 'Who else contributed to the project?',
        validate: contributorInput => {
            if (contributorInput) {
                return true;
            } else {
                console.log('Enter contributing members (if any)')
                return false;
            }
        }
    }
    {
        type: 'input',
        name: 'testing',
        message: 'How have you tested your project?',
        validate: testInput => {
            if (testInput) {
                return true;
            } else {
                console.log('Enter testing info')
                return false;
            }
        }
    }
    {
        type: 'input',
        name: 'github',
        message: '',
        validate: githubInput => {
            if (githubInput) {
                return true;
            } else {
                console.log('Enter a valid GitHub username')
                return false;
            }
        }
    }
    {
        type: 'input',
        name: 'email',
        message: '',
        validate: emailInput => {
            if (emailInput) {
                return true;
            } else {
                console.log('Enter a valid email address')
                return false;
            }
        }
    }
];

// TODO: Create a function to write README file
function writeToFile(README, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
