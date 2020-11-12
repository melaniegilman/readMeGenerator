//function to choose badge
const selectBadge = license => {

  if(license === "MIT") {
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
  } else if (license === "GNU General") {
    return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`;
  } else if (license === "Apache")  {
    return `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
  } else if (license === "ISC") {
    return '[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)' 
  } else if (license === "ODbl") {
    return `[![License: ODbL](https://img.shields.io/badge/License-ODbL-brightgreen.svg)](https://opendatacommons.org/licenses/odbl/)`;
  } else if (license === "The Unlicense") {
    return `[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)`;
  } 
}

// function to generate markdown for README
function generateMarkdown(readmeData) {
    return `
    # ${readmeData.projectName}
    ${selectBadge(readmeData.license)}
    ## Description
    ${readmeData.description}
    ## Table of Contents
    * [Installation](#installation)
    * [Usage](#usage)
    * [License](#license)
    * [Contributing](#contributors)
    * [Tests](#tests)
    * [Questions](#questions)
    ## Installation
    To install the necessary dependencies, run the following command in your command line: 
    ${readmeData.installation}
    ## Usage
    ${readmeData.usage}
    ## License 
    This project is covered by ${readmeData.license}.
    ## Contributing
    ${readmeData.userInfo}
    ## Tests
    To run tests, run the following command: 
    ${readmeData.test}
    ## Questions
    If you have questions about the project or run into issues, contact me at ${readmeData.email}. You can access more of my work at [${readmeData.github}](https://github.com/${readmeData.github})
  `;
  }
  
  module.exports = generateMarkdown;
module.exports = generateMarkdown;
