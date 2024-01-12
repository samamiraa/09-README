//function to generate markdown for README
function generateMarkdown(data) {
  // returns template literal
  return `# ${data.title/*adds title inputted by user*/}

  ![Static Badge](https://img.shields.io/badge/License-${data.license/*adds license chosen by user, creates badge*/}-blue)

  ## Description
  ${data.description/*adds description inputted by user */}
  
  ## Table of Contents
  
  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [License](#license)
  - [Features](#features)
  - [Questions](#questions)
  - [Contributions](#contributions)
  - [Tests](#tests)
  
  ## Installation
  ${data.installation/*adds installation inputted by user  */}
  
  ## Usage
  ${data.usage/*adds usage inputted by user  */}
  
  ## Credits
  ${data.credits/*adds credits inputted by user  */}
  
  ## License
  ![Static Badge](https://img.shields.io/badge/License-${data.license /*adds license chosen by user, creates badge*/}-blue) <br>
  <br>

  This application is covered under ${data.license/*adds license chosen by user*/} license.
  
  ## Features
  ${data.features/*adds features inputted by user*/}

  ## Questions
  Have questions?

  Find me on Github: https://github.com/${data.username/*adds github username inputted by user*/}

  Email me at: ${data.email/*adds email inputted by user*/}
  
  ## Contributions
  ${data.contributions/*adds contributions inputted by user*/}
  
  ## Tests
  ${data.tests/*adds tests inputted by user*/}
  
`;
}

// exports generateMarkdown
module.exports = generateMarkdown;
