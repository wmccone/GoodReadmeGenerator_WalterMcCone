// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  const licenseBadge = ""
  switch (license) {
    case "MIT":
      licenseBadge = "https://img.shields.io/badge/License-MIT-yellow.svg"
      break;
    case "GPL":
      licenseBadge = "https://img.shields.io/badge/License-GPLv3-blue.svg"
      break;
    case "Apache":
      licenseBadge = "https://img.shields.io/badge/License-Apache%202.0-blue.svg"
      break;
  }
  return licenseBadge
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) { }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) { }

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Description

  ${data.description}

  ## Table of Contents

  -[Installation](#installation)
  -[Usage](#usage)
  -[License](#license)
  -[Credits](#credits)
  -[Tests](#tests)
  -[Contact Information](#contact)

  ## Installation

  ${data.instructions}

  ## Usage

  ${data.usage}

  ## License

  ${renderLicenseSection(data.license)}

  ## Credits

  ${data.contributors}

  ## Tests

  ${data.tests}

  ## Contact

  ${data.github} or ${data.email}

`;
}

module.exports = generateMarkdown;
