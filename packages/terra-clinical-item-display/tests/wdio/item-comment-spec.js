// eslint-disable-next-line import/no-extraneous-dependencies
const wdioTestDevSiteSnapshots = require('terra-dev-site/lib/dev-site-snapshots/wdio/wdioTestDevSiteSnapshots').default;

const testSetup = {
  viewports: ['tiny', 'medium'],
  examples: {
    'Default Item Comment': {
      viewports: ['tiny', 'medium', 'large'],
      parentName: 'Default',
      themedTestName: 'themed',
      themeableProperties: {
        '--terra-clinical-item-comment-color': '#75767d',
        '--terra-clinical-item-comment-inline-icon-color': 'rgba(117, 118, 125, 0.3)',
      },
    },
    'Text Item Comment': {
      parentName: 'Text',
    },
  },
};

wdioTestDevSiteSnapshots({
  package: 'terra-clinical-item-display',
  testSetup,
});
