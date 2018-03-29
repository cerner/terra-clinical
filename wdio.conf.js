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
    enabled: !process.env.TRAVIS,
    cleanup: false,
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

  // define suites
  suites: {
    actionHeader: [
      'packages/terra-clinical-action-header/tests/wdio/**/*-spec.js',
    ],
    application: [
      'packages/terra-clinical-application/tests/wdio/**/*-spec.js',
    ],
    detailView: [
      'packages/terra-clinical-detail-view/tests/wdio/**/*-spec.js',
    ],
    header: [
      'packages/terra-clinical-header/tests/wdio/**/*-spec.js',
    ],
    itemCollection: [
      'packages/terra-clinical-item-collection/tests/wdio/**/*-spec.js',
    ],
    itemDisplay: [
      'packages/terra-clinical-item-display/tests/wdio/**/*-spec.js',
    ],
    itemView: [
      'packages/terra-clinical-item-view/tests/wdio/**/*-spec.js',
    ],
    labelValueView: [
      'packages/terra-clinical-label-value-view/tests/wdio/**/*-spec.js',
    ],
    onsetPicker: [
      'packages/terra-clinical-onset-picker/tests/wdio/**/*-spec.js',
    ],
  },

   // Configuration for ExpressDevService
  webpackConfig,
};

config.services = wdioConf.config.services.concat([ExpressDevService]);
exports.config = config;
