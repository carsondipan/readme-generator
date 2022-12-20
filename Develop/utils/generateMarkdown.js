// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

const inquirer = require("inquirer");
const fs = require('fs');
const index = require('../index.js');

function renderLicenseBadge(license) 
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}
  ## Table of Contents
  ### * [Install](#install)
  ### * [Uses](#uses)
  ### * [Licenses](#licenses)
  ### * [Contributors](#contributors)
  ### * [Tests](#tests)
  ### * [Questions](#questions)

  ## Install
  ### You must utilize this for the app to work:
  ### ${answer.installation}

  ## Uses:
  ### ${answer.uses}

  ## Contributors:
  ### ${answer.contributors}

  ## Tests
  ### ${answer.testing}

  ## Questions
  ### If you've got questions, send em my way at:
  ### GitHub: https://github.com/${answer.github}
  ### or
  ### Email me at: ${answer.email}
`;
}

module.exports = generateMarkdown;
