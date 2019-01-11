const path = require('path');
const fs = require('fs');
const markdownMagic = require('markdown-magic'); // eslint-disable-line import/no-extraneous-dependencies

const header = `| Terra Package      | Version | Status | Dependencies |
|--------------------|---------|--------|--------------|
`;

const config = {
  transforms: {
    // see: https://github.com/camacho/markdown-magic-subpackage-list
    SUBPACKAGELIST(content, _options, configuration) {
      const packagesDir = path.resolve(
        path.dirname(configuration.originalPath), './packages',
      );

      return header + fs
        .readdirSync(packagesDir)
        .map((packageName) => {
          const packageLink = `[${packageName}](https://github.com/cerner/terra-clinical/tree/master/packages/${packageName})`;
          const npmBadge = `[![NPM version](https://badgen.net/npm/v/${packageName})](https://www.npmjs.org/package/${packageName})`;
          const buildBadge = '![Stable](https://badgen.net/badge/status/Stable/green)';
          const dependenciesBadge = `[![${packageName}](https://badgen.net/david/dep/cerner/terra-clinical/packages/${packageName})](https://david-dm.org/cerner/terra-clinical?path=packages/${packageName})`;

          return `| ${packageLink} | ${npmBadge} | ${buildBadge} | ${dependenciesBadge} |`;
        })
        .join('\n');
    },
  },
};

const markdownPath = path.join(__dirname, '../../README.md');
markdownMagic(markdownPath, config);
