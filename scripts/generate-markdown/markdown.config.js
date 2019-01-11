const path = require('path');
const fs = require('fs');
const markdownMagic = require('markdown-magic'); // eslint-disable-line import/no-extraneous-dependencies

const header = `| Terra Package      | Version | Status | Dependencies |
|--------------------|---------|--------|--------------|
`;

const config = {
  transforms: {
    // see: https://github.com/camacho/markdown-magic-subpackage-list
    SUBPACKAGELIST() {
      const packagesDir = path.join(process.cwd(), 'packages');

      return header + fs
        .readdirSync(packagesDir)
        .map(filename => path.join(packagesDir, filename))
        .map(dirPath => JSON.parse(fs.readFileSync(path.resolve(dirPath, 'package.json'))))
        .map((packages) => {
          const packageLink = `[${packages.name}](https://github.com/cerner/terra-clinical/tree/master/packages/${packages.name})`;
          const npmBadge = `[![NPM version](https://badgen.net/npm/v/${packages.name})](https://www.npmjs.org/package/${packages.name})`;
          const buildBadge = '![Stable](https://badgen.net/badge/status/Stable/green)';
          const dependenciesBadge = `[![${packages.name}](https://badgen.net/david/dep/cerner/terra-clinical/packages/${packages.name})](https://david-dm.org/cerner/terra-clinical?path=packages/${packages.name})`;

          return `| ${packageLink} | ${npmBadge} | ${buildBadge} | ${dependenciesBadge} |`;
        })
        .join('\n');
    },
  },
};

const markdownPath = path.join(__dirname, '../../README.md');
markdownMagic(markdownPath, config);
