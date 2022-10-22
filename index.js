// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
// TODO: Create an array of questions for user input
const questions = [];



// TODO: Create a function to write README file
// function writeToFile(fileName, data) {
    const writeReadme = (response) =>
        ` #${response.title}
        `
// }

// TODO: Create a function to initialize app
function init() {
    inquirer
    .prompt([
      {
        type: 'input',
        name: 'title',
        message: 'What is the title of your repository/project?',
      }
    ])
    .then((response) => {
      const readmeGen = writeReadme(response);
  
      fs.writeFile('test.md', readmeGen, (err) =>
        err ? console.log(err) : console.log('Successfully created readme.md!')
      );
    });
}

// Function call to initialize app
init();
