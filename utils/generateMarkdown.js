// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ![Static Badge](https://img.shields.io/badge/License-${data.license}-green)

  ## Description
  ${data.description}
  
  ## Table of Contents
  
  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [License](#license)
  - [Features](#Features)
  - [Questions](#Questions)
  - [Contributions](#Contributions)
  - [Tests](#Tests)
  
  ## Installation
  ${data.installation}
  
  ## Usage
  ${data.usage}
  
  ## Credits
  ${data.credits}
  
  ## License
  ![Static Badge](https://img.shields.io/badge/License-${data.license}-blue)
  This application is covered under the ${data.license}.
  
  ## Features
  ${data.features}

  ## Questions
  Have questions?

  Find me on Github: <a href"https://github.com/${data.username}">${data.username}</a>

  Email me at:${data.email}
  
  ## How to Contribute
  ${data.contributions}
  
  ## Tests
  ${data.tests}
  
`;
}

module.exports = generateMarkdown;
