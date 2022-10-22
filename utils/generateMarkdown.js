

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# Title: ${data.title}
## Table of Contents

1. [ Description ](#description)
2. [Installation ](#installation)
3. [Usage ](#usage)
4. [Contributing ](#contributing)
5. [Tests ](#testing)
6. [Questions ](#questions)

<a name="description"></a>
## Description

${data.description}

<a name="installation"></a>
## Installation

${data.installation}

<a name="usage"></a>
## Usage

${data.usage}

<a name="contributing"></a>
## Contributing

${data.contributing}

<a name="testing"></a>
## Tests

${data.testing}

<a name="questions"></a>
## Questions

You can reach me at my [GitHub Profile](https://github.com/${data.github}/).

If you have any additional questions, feel free to email me at ${data.email}`;
}

module.exports = generateMarkdown;
