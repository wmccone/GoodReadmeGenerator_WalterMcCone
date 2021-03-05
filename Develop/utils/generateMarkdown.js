// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

//function is going to pull a license badge on the input chosen
function renderLicenseBadge(license) {
  //creates the badge variable to be used in the renderLicenseSection function
  let licenseBadge = ""
  //This switch function will find the badge image based on the user input
  switch (license) {
    case "MIT":
      licenseBadge = "https://img.shields.io/badge/License-MIT-yellow.svg"
      break;
    case "GPLv3":
      licenseBadge = "https://img.shields.io/badge/License-GPLv3-blue.svg"
      break;
    case "Apache 2.0":
      licenseBadge = "https://img.shields.io/badge/License-Apache%202.0-blue.svg"
      break;
      //will return an empty string if none is selected
    default:
      licenseBadge = ""
  }
  //sends the badge to the render license function
  return licenseBadge
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string

//function is going to pull the license link based on the input chosen.
function renderLicenseLink(license) {
  //creates the link variable to be used in the renderLicenseSection function
  let licenseLink = ""

  //This switch function will find the link based on the user input
  switch (license) {
    case "MIT":
      licenseLink = "https://opensource.org/licenses/MIT"
      break;
    case "GPL":
      licenseLink = "https://www.gnu.org/licenses/gpl-3.0"
      break;
    case "Apache":
      licenseLink = "https://opensource.org/licenses/Apache-2.0"
      break;
      //will return an empty string if none is selected
    default:
      licenseLink = ""
  }
  //sends the link to the render license function
  return licenseLink
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string

//This function will put together the badge input and the link input to create a fully functional license badge in the readme.
function renderLicenseSection(license) {
//This will return a blank string if nothing is selected or no license is chosen
  if (!license || license === 'No License') {
    return "";
  }
  //This will return the license badge through a template literal
  else {
    return `[![License](${renderLicenseBadge(license)})](${renderLicenseLink(license)})`
  }

}

// TODO: Create a function to generate markdown for README

//This is the integral function that will write the content to the ReadMe file based on the users input in the console
function generateMarkdown(data) {
  //This will write the Readme content using a template literal input data should include, Project name, description, Instructions for use, use case, license badge, contributors, tests, and contact information
  return `# ${data.project}

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

module.exports = { generateMarkdown };
