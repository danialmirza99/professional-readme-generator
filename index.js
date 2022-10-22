// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
// TODO: Create an array of questions for user input
const questions = [
    'What is the title of your repository/project? ',
    'Please write a description about your repository/project. ',
    'Please enter any instructions you may have for installation. ',
    'Please write a usage manual. ',
    'Please enter contribution guidelines. ',
    'Please enter testing instructions. ',
    'Please enter your github username. ',
    'Please enter your email address. '
];

const writeReadme = (response) =>
         
`# Title: ${response.title}

## Table of Contents
---------------------

    * [Description](#description)
    * [Installation](#installation)
    * [Usage](#usage)
    * [Contributing](#contributing)
    * [Tests](#testing)
    * [Questions](#questions)

<a name="description"></a>
## Description

${response.description}

<a name="installation"></a>
## Installation

${response.installation}

<a name="usage"></a>
## Usage

${response.usage}

<a name="contributing"></a>
## Contributing

${response.contributing}

<a name="testing"></a>
## Tests

${response.testing}

<a name="questions"></a>
## Questions

You can reach me at my [GitHub Profile](https://github.com/${response.github}/).

If you have any additional questions, feel free to email me at ${response.email}`;
        

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
        message: questions[0],
      },
      {
        type: 'input',
        name: 'description',
        message: questions[1],
      },
      {
        type: 'input',
        name: 'installation',
        message: questions[2],
      },
      {
        type: 'input',
        name: 'usage',
        message: questions[3],
      },
      {
        type: 'input',
        name: 'contributing',
        message: questions[4],
      },
      {
        type: 'input',
        name: 'testing',
        message: questions[5],
      },
      {
        type: 'input',
        name: 'github',
        message: questions[6],
      },
      {
        type: 'input',
        name: 'email',
        message: questions[7],
      },
    ])
    .then((response) => {
      const readmeGen = writeReadme(response);
      writeToFile('./utils/README.md', readmeGen);
    });
}

// Function call to initialize app
init();
