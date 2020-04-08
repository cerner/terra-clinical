const path = require('path');
// eslint-disable-next-line import/no-extraneous-dependencies
const defaultWdioConfig = require('terra-toolkit/config/wdio/wdio.conf');
const lowlightWdioConfig = require('./config/wdio/clinical-lowlight-theme/wdio.conf');

let wdioConfig = defaultWdioConfig.config;

if (process.env.THEME === 'clinical-lowlight-theme') {
  wdioConfig = lowlightWdioConfig.config;
}

if (process.env.npm_package_name !== 'terra-clinical') {
  wdioConfig.specs = [path.join(__dirname, 'packages', process.env.npm_package_name, 'tests', 'wdio', '**', '*-spec.js')];
}

exports.config = wdioConfig;
