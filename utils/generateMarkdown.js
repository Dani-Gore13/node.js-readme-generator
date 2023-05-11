// Helper function to render license badge
function renderLicenseBadge(license) {
  if (!license) {
    return "";
  }

  let badge = "";

  switch (license.toLowerCase()) {
    case "mit":
      badge =
        "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
      break;
    case "apache 2.0":
      badge =
        "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
      break;
    case "gnu gpl v3":
      badge =
        "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
      break;
    default:
      badge = "";
  }

  return badge;
}

// Helper function to render license link
function renderLicenseLink(license) {
  if (!license) {
    return "";
  }

  let link = "";

  switch (license.toLowerCase()) {
    case "mit":
      link = "https://opensource.org/licenses/MIT";
      break;
    case "apache 2.0":
      link = "https://opensource.org/licenses/Apache-2.0";
      break;
    case "gnu gpl v3":
      link = "https://www.gnu.org/licenses/gpl-3.0";
      break;
    default:
      link = "";
  }

  return link;
}

// Helper function to render license section
function renderLicenseSection(license) {
  if (!license) {
    return "";
  }

  return `## License

This project is licensed under the ${license} license. See the [LICENSE](${renderLicenseLink(
    license
  )}) file for details.`;
}

// Generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

${renderLicenseBadge(data.license)}

## Description

${data.description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation

${data.installation}

## Usage

${data.usage}

${renderLicenseSection(data.license)}

## Contributing

${data.contributing}

## Tests

${data.tests}

## Questions

If you have any questions about the project, please feel free to contact me on [GitHub](https://github.com/${
    data.githubUsername
  }) or by [email](mailto:${data.email}).

`;
}

module.exports = generateMarkdown;
