module.exports = readmeData => {
    console.log(readmeData)
    return `
    # ${readmeData.projectName}
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