const fs = require("fs");
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');

// array of questions for user
const questions = [
    {
        type: 'input',
        name: 'github',
        message: 'What is your username on Github?',
        validate: github => {
            if (github) {
                return true;
            } else {
                console.log("Please enter your Github Username!");
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your e-mail address?',
        validate: emailInput => {
            if (emailInput) {
                return true;
            } else {
                console.log("Please enter your e-mail!");
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'projectName',
        message: 'What is name of your project?',
        validate: projectName => {
            if (projectName) {
                return true;
            } else {
                console.log("Please enter your project's name!");
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please write a description of your project',
        validate: descriptionInput => {
            if (descriptionInput) {
                return true;
            } else {
                console.log("Please enter a description of your project!");
                return false;
            }
        }
     },
     {
        type: 'input',
        name: 'usage',
        message: 'Please write a short description of how to use your project.',
        validate: usageInput => {
            if (usageInput) {
                return true;
            } else {
                console.log("Please enter a description of your project!");
                return false;
            }
        }
    },
    {
        type: 'list',
        name: 'license',
        message: 'Please choose a license for your project',
        choices: ['MIT', 'GNU General', 'Apache', 'ISC', 'ODbl', 'The Unlicense']
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What command should be run to install dependencies?',
        validate: installInput => {
            if (installInput) {
                return true;
            } else {
                console.log("Please tell the user how to install dependencies!");
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'test',
        message: 'What command should be run to run tests?',
        validate: testInput => {
            if (testInput) {
                return true;
            } else {
                console.log("Please tell the user what command should be run to run tests!");
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'userInfo',
        message: 'What does the user need to know about using the repo?',
        validate: infoInput => {
            if (infoInput) {
                return true;
            } else {
                console.log("Please tell the user what they need to know about using the repo!");
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'contributors',
        message: 'What does the user need to know about contributing?',
        validate: contributorInput => {
            if (contributorInput) {
                return true;
            } else {
                console.log("Please tell the user anything they need to know about contributing!");
                return false;
            }
        }
    },
];


// function to write README file
const writeToFile = data => {
    fs.writeFile('./newREADME.md', data, err => {
        if (err) throw err;
        console.log('Your README is ready to view!')
    })
}

// function to initialize program
const init = () => {
    console.log("Welcome! Follow the prompts to create your README")
    return inquirer.prompt(questions);
}

// function call to initialize program
init() 
    .then(answers => {
        return generateMarkdown(answers);
    })
    .then (finalTemplate => {
        return writeToFile(finalTemplate);
    })
    .catch (err => {
        console.log(err);
    });
