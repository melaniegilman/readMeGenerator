## Description
This is a professional README generator.  When the user invokes the application by running node index.js in the terminal, the application will run and prompt the user for information.  The information will be logged into the correct format and a professional README wil be automatically generated and will appear in the root of the directory.

## Technologies Used
node.js

## Screenshot
 ![Screenshot of terminal](/src/img/Screenshot.png)

## Walkthrough video
https://drive.google.com/file/d/1Z_AzEcBi5sYM9y4IqOQos_GryvcISUiX/view

## Installation
The user must install Inquirer by running "npm install inquirer"

## Usage
After the user has successfully installed Inquirer, the user only needs the command line to run the program. After typing "node index.js" in to the command line, the user is prompted through a series of questions. The user responses are sent to the generateMarkdown.js file and populate the README template. This template is sent to the writeToFile function. The new README file is created and placed in the root folder as "newREADME.md."

## Contributions 
Melanie Gilman (https://github.com/melaniegilman)
