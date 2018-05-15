/* eslint-disable import/no-extraneous-dependencies */
const wdioConf = require('terra-dev-site/config/wdio/wdio.conf');

const config = {
  ...wdioConf.config,

  // Configuration for SeleniumDocker service
  seleniumDocker: {
    enabled: true,
  },
  
  host: '0.0.0.0',
};

exports.config = config;
