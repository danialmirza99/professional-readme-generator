// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
// TODO: Create an array of questions for user input
const questions = [];

const writeReadme = (response) =>
         
`# Title: ${response.title}

## Description

${response.description}

## Installation

${response.installation}

## Usage

${response.usage}

## License

## Contributing

${response.contributing}

## Tests

${response.testing}

## Questions`;
        

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    
    
        fs.writeFile(fileName, data, (err) =>
        err ? console.log(err) : console.log('Successfully created readme.md!')
    );
}

// TODO: Create a function to initialize app
function init() {
    inquirer
    .prompt([
      {
        type: 'input',
        name: 'title',
        message: 'What is the title of your repository/project?',
      },
      {
        type: 'input',
        name: 'description',
        message: 'Please write a description about your repository/project.',
      },
      {
        type: 'input',
        name: 'installation',
        message: 'Please enter any instructions you may have for installation.',
      },
      {
        type: 'input',
        name: 'usage',
        message: 'Please write a usage manual',
      },
      {
        type: 'input',
        name: 'contributing',
        message: 'Please enter contribution guidelines.',
      },
      {
        type: 'input',
        name: 'testing',
        message: 'Please enter testing instructions.',
      },
    ])
    .then((response) => {
      const readmeGen = writeReadme(response);
      writeToFile('./utils/README.md', readmeGen);
    });
}

// Function call to initialize app
init();
