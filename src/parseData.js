const table = {
  react: true,
  express: true,
  mysql: true,
  mysql2: true,
  vue: true,
  "@angular/cli": true,
  typescript: true,
  eslint: true,
};

module.exports = function parseData(packageData) {
  const projectData = {
    name: undefined,
    description: undefined,
    version: undefined,
    license: undefined,
    scripts: new Set(),
    dependencies: new Set(),
  };

  if (packageData.name) {
    projectData.name = packageData.name;
  }
  if (packageData.description) {
    projectData.description = packageData.description;
  }
  if (packageData.version) {
    projectData.version = packageData.version;
  }
  if (packageData.license) {
    projectData.license = packageData.license;
  }
  if (packageData.scripts) {
    for (let key in packageData.scripts) {
      projectData.scripts.add(key);
    }
  }
  if (packageData.dependencies) {
    for (let key in packageData.scripts) {
      if (table[key] !== undefined) {
        projectData.dependencies.add(key);
      }
    }
  }

  return projectData;
};
