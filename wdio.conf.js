/* eslint-disable import/no-extraneous-dependencies */
const wdioConf = require('terra-dev-site/config/wdio/wdio.conf');

const config = {
  ...wdioConf.config,

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
};

exports.config = config;
