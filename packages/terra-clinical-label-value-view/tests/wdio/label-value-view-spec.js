// eslint-disable-next-line import/no-extraneous-dependencies
const wdioTestDevSiteSnapshots = require('terra-dev-site/lib/dev-site-snapshots/wdio/wdioTestDevSiteSnapshots').default;

const testSetup = {
  examples: {
    'Default Label Value View': {
      parentName: 'when no value input is provided',
      themedTestName: 'themed',
      themeableProperties: {
        '--terra-label-value-view-label-color': 'purple',
      },
    },
    'Text Value Label Value View': {
      parentName: 'when a text input is provided',
    },
    'Node Value Label Value View': {
      parentName: 'when a node input is provided',
    },
    'Multiple Value Label Value View': {
      parentName: 'when text and node inputs are provided',
    },
  },
};

wdioTestDevSiteSnapshots({
  package: 'terra-clinical-label-value-view',
  testSetup,
});
