/* eslint-disable import/no-extraneous-dependencies */
const wdioConf = require('terra-toolkit/lib/wdio/conf');
const webpackConfig = require('./packages/terra-clinical-site/webpack.config.js');
const WebpackDevService = require('terra-toolkit/lib/wdio/services/index').WebpackDevService;
const localIP = require('ip');
const path = require('path');

const webpackPort = 8080;
const isRepoTest = __dirname === process.cwd();

// Flex specs search between local pacakge and repo
let specs = path.join('tests', 'wdio', '**', '*-spec.js');
if (isRepoTest) {
  specs = path.join('packages', 'terra-*', specs);
}

const config = {
  ...wdioConf.config,
  baseUrl: `http://${localIP.address()}:${webpackPort}`,
  specs: [specs],

  // Terra-toolkit services are 'visual-regression', AxeService, TerraService, SeleniumDockerService
  services: wdioConf.config.services.concat([WebpackDevService]),

  // Configuration for terra-toolkit's SeleniumDocker service
  seleniumDocker: {
    enabled: !process.env.TRAVIS,
    cleanup: false,
    env: {
      TZ: 'America/Chicago',
    },
  },

   // Configuration for WebPackDevService
  webpackPort,
  webpackConfig,
};

exports.config = config;
