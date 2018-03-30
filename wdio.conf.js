/* eslint-disable import/no-extraneous-dependencies */
const wdioConf = require('terra-toolkit/lib/wdio/conf');
const webpackConfig = require('./webpack.config.js');
const ExpressDevService = require('terra-toolkit/lib/wdio/services/index').ExpressDevService;
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
  exclude: [
    'packages/terra-clinical-error-view/tests/wdio/**/*-spec.js',
  ],

  // Configuration for terra-toolkit's SeleniumDocker service
  seleniumDocker: {
    env: {
      TZ: 'America/Chicago',
    },
  },

  axe: {
    inject: true,
    options: {
      rules: [{
        id: 'landmark-one-main',
        enabled: false,
      }],
    },
  },

  // global visual-regression selector
  terra: {
    selector: '[data-terra-dev-site-content] *:first-child',
  },

   // Configuration for ExpressDevService
  webpackConfig,
};

config.services = wdioConf.config.services.concat([ExpressDevService]);
exports.config = config;
