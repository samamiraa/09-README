// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

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
