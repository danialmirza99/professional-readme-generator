/*
ALL CONTENTS OF THIS PAGE WRE MOVED TO INDEX.JS
*/









// // TODO: Create a function that returns a license badge based on which license is passed in
// // If there is no license, return an empty string
// function renderLicenseBadge(license) {
//   if((license === 'None') || (license === undefined)){
//       return ""
//     }
//     else if (license == 'MIT'){
//       return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
//     }
//     else if (license == 'Eclipse'){
//       return "[![License](https://img.shields.io/badge/License-EPL%201.0-red.svg)](https://opensource.org/licenses/EPL-1.0)"
//     }
//     else if (license == 'Apache'){
//       return "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
//     }
// }

// // TODO: Create a function that returns the license link
// // If there is no license, return an empty string
// function renderLicenseLink(license) {
//   if((license === 'None') || (license === undefined)){
//       return ""
//     }
//     else if (license == 'MIT'){
//       return "The license of this application is under MIT. [Click here to learn more!](https://opensource.org/licenses/MIT)"
//     }
//     else if (license == 'Eclipse'){
//       return "The license of this application is under Eclipse. [Click here to learn more!](https://opensource.org/licenses/EPL-1.0)"
//     }
//     else if (license == 'Apache'){
//       return "The license of this application is under MIT. [Click here to learn more!](https://opensource.org/licenses/Apache-2.0)"
//     }
// }

// // TODO: Create a function that returns the license section of README
// // If there is no license, return an empty string
// function renderLicenseSection(license) {
// if((license === 'None') || (license === undefined)){
//   return ""
// }
// else{
//   return "<a name=\"license\"></a>\n## License"
// }
// }

// function renderLicenseTOC(license) {
//   if((license === 'None') || (license === undefined)){
//     return ""
//   }
//   else{
//     return "7. [License ](#license)"
//   }
// }

// // TODO: Create a function to generate markdown for README
// function generateMarkdown(data) {
//   return `# Title: ${response.title}

//   ${renderLicenseBadge(response.license)}
  
//   ## Table of Contents
  
//   1. [ Description ](#description)
//   2. [Installation ](#installation)
//   3. [Usage ](#usage)
//   4. [Contributing ](#contributing)
//   5. [Tests ](#testing)
//   6. [Questions ](#questions)
//   ${renderLicenseTOC(response.license)}
  
//   <a name="description"></a>
//   ## Description
  
//   ${response.description}
  
//   <a name="installation"></a>
//   ## Installation
  
//   ${response.installation}
  
//   <a name="usage"></a>
//   ## Usage
  
//   ${response.usage}
  
//   <a name="contributing"></a>
//   ## Contributing
  
//   ${response.contributing}
  
//   <a name="testing"></a>
//   ## Tests
  
//   ${response.testing}
  
//   <a name="questions"></a>
//   ## Questions
  
//   You can reach me at my [GitHub Profile](https://github.com/${response.github}/).
  
//   If you have any additional questions, feel free to email me at ${response.email}
  
//   ${renderLicenseSection(response.license)}
  
//   ${renderLicenseLink(response.license)}`;
// }

// module.exports = generateMarkdown;
