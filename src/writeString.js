const innerCode = `${"```"}`;

module.exports = function writeString(projectData) {
  let string = ``;

  if (!projectData) return string;

  if (projectData.name) {
    string += `# ${projectData.name} 👏\n\n`;
  }

  if (projectData.description) {
    string += `> ${projectData.description}\n\n`;
  }

  if (projectData.version) {
    string += `![version](https://img.shields.io/badge/version-${projectData.version}-brightgreen) `;
  }

  if (projectData.dependencies.has("react")) {
    string += `![React](https://img.shields.io/badge/-React-61DAFB?&logo=react&logoColor=white) `;
  }
  if (projectData.dependencies.has("vue")) {
    string += `![Vue.js](https://img.shields.io/badge/-vue.js-4FC08D?logo=vue.js&logoColor=white) `;
  }
  if (projectData.dependencies.has("@angular/cli")) {
    string += `![Angular](https://img.shields.io/badge/-Angular-DD0031?logo=angular&logoColor=white) `;
  }

  if (projectData.dependencies.has("typescript")) {
    string += `![typescript](https://img.shields.io/badge/-TypeScript-007ACC?&logo=TypeScript&logoColor=white) `;
  }
  if (projectData.dependencies.has("eslint")) {
    string += `![ESLint](https://img.shields.io/badge/-ESLint-4B32C3?&logo=ESLint&logoColor=white) `;
  }
  if (
    projectData.dependencies.has("mysql") ||
    projectData.dependencies.has("mysql2")
  ) {
    string += `![Mysql](https://img.shields.io/badge/-MySQL-4479A1?&logo=MySQL&logoColor=white) `;
  }

  string += `\n\n`;

  string += `## install\n\n`;
  string += `${innerCode}bash\nnpm install\n# or \nyarn\n${innerCode}`;
  string += `\n\n`;

  projectData.scripts.forEach((script) => {
    string += `## ${script}\n\n`;
    string += `${innerCode}bash\nnpm ${script}\n# or \nyarn ${script}\n${innerCode}`;
    string += `\n\n`;
  });

  string += `## support\n\n`;
  string += `if you want to support this projects, please click ⭐️\n`;

  return string;
};
